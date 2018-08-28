import itertools
import glob
import re
import os
import os.path
import sys
import yaml
import argparse


def create_deserializer_class(required_fields, optional_fields):
    class _Deserializer_Class:
        def __init__(self, _obj, **kwargs):
            obj = dict(_obj, **kwargs)
            for key in required_fields:
                setattr(self, key, obj[key])
            for key, default in optional_fields.items():
                setattr(self, key, obj.get(key, default))
    return _Deserializer_Class


APIBaseSerializer = create_deserializer_class(
    "name method path group".split(),
    dict(itertools.chain(
            zip("title description permission".split(), [None]*3),
            zip("headers params returns errors".split(), [{}]*4)
        ))
)


def create_api_recursive_object_class(required_fields, optional_fields):
    RE_OPTIONAL_FIELD = re.compile("^optional<(.+?)>$", re.IGNORECASE)
    
    class _API_Component_Class(create_deserializer_class(required_fields, optional_fields)):
        def __init__(self, item):
            super().__init__(item[1], name=item[0])
            self.fields = list(map(lambda item: self.__class__(("%s.%s" % (self.name, item[0]), item[1])), self.fields.items()))
            m = RE_OPTIONAL_FIELD.match(self.type)
            if m:
                self.type = m.group(1)
                self.optional = True
    return _API_Component_Class


class APIHeader(create_api_recursive_object_class(
    ["name", "type"],
    dict(fields={}, **{k: None for k in "group optional default description".split()})
)):
    def __str__(self):
        keywords = ["@apiHeader"]
        if self.group:
            keywords.append("(%s)" % self.group)
        keywords.append("{%s}" % self.type)
        if self.optional:
            if self.default:
                keywords.append("[%s=%s]" % (self.name, self.default))
            else:
                keywords.append("[%s]" % self.name)
        else:
            keywords.append(self.name)
        if self.description:
            keywords.append(self.description)
        mystr = " ".join(keywords)
        return "\n".join([mystr] + list(map(str, self.fields)))
    
    def __expr__(self):
        return str(self)


class APIParam(create_api_recursive_object_class(
    ["name", "type"],
    dict(fields={}, **{k: None for k in "group restrictToValues optional default description".split()})
)):
    def __str__(self):
        keywords = ["@apiParam"]
        if self.group:
            keywords.append("(%s)" % self.group)
        if self.restrictToValues:
            keywords.append("{%s=%s}" % (self.type, ",".join(self.restrictToValues)))
        else:
            keywords.append("{%s}" % self.type)
        if self.optional:
            if self.default:
                keywords.append("[%s=%s]" % (self.name, self.default))
            else:
                keywords.append("[%s]" % self.name)
        else:
            keywords.append(self.name)
        if self.description:
            keywords.append(self.description)
        mystr = " ".join(keywords)
        return "\n".join([mystr] + list(map(str, self.fields)))
    
    def __expr__(self):
        return str(self)


class APISuccess(create_api_recursive_object_class(
    ["name", "type"],
    dict(fields={}, **{k: None for k in "group optional description".split()})
)):
    def __str__(self):
        keywords = ["@apiSuccess"]
        if self.group:
            keywords.append("(%s)" % self.group)
        keywords.append("{%s}" % self.type)
        if self.optional:
            keywords.append("[%s]" % self.name)
        else:
            keywords.append(self.name)
        if self.description:
            keywords.append(self.description)
        mystr = " ".join(keywords)
        return "\n".join([mystr] + list(map(str, self.fields)))
    
    def __expr__(self):
        return str(self)


class APIError(create_api_recursive_object_class(
    ["name"],
    dict(type="ErrorType", fields={}, **{k: None for k in "group description".split()})
)):
    def __str__(self):
        keywords = ["@apiError"]
        if self.group:
            keywords.append("(%s)" % self.group)
        if self.type:
            keywords.append("{%s}" % self.type)
        keywords.append(self.name)
        if self.description:
            keywords.append(self.description)
        mystr = " ".join(keywords)
        return "\n".join([mystr] + list(map(str, self.fields)))
    
    def __expr__(self):
        return str(self)


class API(APIBaseSerializer):
    def __init__(self, name, content, group="default"):
        super().__init__(content, name=name, group=group)
        self.headers = list(map(APIHeader, self.headers.items()))
        self.params = list(map(APIParam, self.params.items()))
        self.returns = list(map(APISuccess, self.returns.items()))
        self.errors = list(map(APIError, self.errors.items()))
        
    def __str__(self):
        statements = []
        
        apiStatement = "@api {%s} %s" % (self.method, self.path)
        if self.title:
            apiStatement += " {0.title}".format(self)
        statements.append(apiStatement)
        
        statements.append("@apiName %s" % self.name)
        
        if self.description:
            statements.append("@apiDescription %s" % self.description)
        
        statements.append("@apiGroup %s" % self.group)
        
        if self.permission:
            statements.append("@apiPermission %s" % self.permission)
            
        statements.extend(map(str, self.headers))
        statements.extend(map(str, self.params))
        statements.extend(map(str, self.returns))
        statements.extend(map(str, self.errors))
        
        return "\n".join(statements)


def main(source, cache="build/"):
    all_files = glob.glob(os.path.join(source, "*.yml"))

    if not os.path.exist(cache):
        os.mkdir(cache)

    for fname in all_files:
        module = os.path.basename(fname).split(".")[0]
        with open(fname, 'r') as yin:
            y = yaml.load(yin)
            
        apis = [API(*api, group=group) for group, apis in y.items() for api in apis.items()]
        with open(os.path.join(cache, "%s.py" % module), 'w') as fout:
            for api in apis:
                _ = fout.write('"""\n%s\n"""\n\n' % api)
                fout.flush()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Parse config to apidoc")
    parser.add_argument("--source", "-s", required=True, help="source yaml definition")
    parser.add_argument("--cache", default="build", help="build cache location")

    sysargs = parser.parse_args(sys.argv[1:])
    main(**vars(sysargs))