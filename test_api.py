import re
import json
import random
import requests
import uuid
import glob
import os
import yaml
from faker import Faker
from faker.providers import BaseProvider
from build_doc_py import API

METHOD_ORDER = ['post','put','get','delete']

CUSTOMER_ID = None

DISEASE_IDS = ["598dd80c-fac5-4ec4-93b5-557a49e54dfe",
               "61cb7e1e-7e64-4f6a-a5e7-1998b6df0e54"]

HOSPITAL_IDS = ["d2a28146-3362-4ed5-b360-1d22199b9f24",
                "2fe2df4a-4a36-4737-b698-da4a5dbf8a60"]

INFO_IDS = ["8efdfc31-b236-48cd-ac2e-16cde8dd62d1",]
LIST_OF_CHECKED_APIS = open('checked_api_list.txt','w')

class Provider(BaseProvider):

    def uuid(self):
        return str(uuid.uuid4())

    def customer_id(self):
        return str(CUSTOMER_ID)

    def password(self):
        return '/.,Buz1234'

    def disease_id(self):
        return random.choice(DISEASE_IDS)

    def hospital_id(self):
        return random.choice(HOSPITAL_IDS)

    def info_id(self):
        return random.choice(INFO_IDS)

    def customer(self):
        return self.customer_id()

    def disease(self):
        return self.disease_id()

    def hospital(self):
        return self.hospital_id()

    def info(self):
        return self.info()

    def int(self):
        return random.randint(0,3)

    def password_confirmation(self):
        return self.password()

    def query(self):
        return '?name=demo&ordering=name'

    def id(self):
        return self.uuid()

    def token(self):
        return str(uuid.uuid4()).replace('-','')

BASE_URL = 'http://api.yiconfirmed.com/api/'
fake = Faker('en_US')
fake.add_provider(Provider)


def fake_customer():
    response = session.post('http://api.yiconfirmed.com/api/customer/login',
                             data=json.dumps({
                                 "email":"elewis@hotmail.com",
                                 "password": "/.,Buz123"
                             }))
    return str(json.loads(response.content)['customer_id'])


def setup(api):
    url = BASE_URL+api.path[1:] if api.path.startswith('/') else BASE_URL+api.path
    data = {}
    kw_data = {}
    for param in api.params:
        if api.group.lower()+'_'+param.name in dir(fake):
            data[param.name] = fake.__getattribute__(
                api.group.lower())()
        elif param.name in dir(fake):
            data[param.name] = fake.__getattribute__(param.name)()
        else:
            if param.type == 'String':
                data[param.name] = ''.join(fake.words())
            elif param.type == 'Number':
                data[param.name] = fake.int()
            elif param.type == 'DateTime':
                data[param.name] = str(fake.date_time())
            elif param.type == 'UUID':
                data[param.name] = fake.uuid()
    kwargs = re.findall('/:(.*?)(/|$)',url)
    if kwargs:
        for kw in [k[0] for k in kwargs]:
            if 'id' in kw:
                try:
                    kw_data[kw] = data[kw]
                except KeyError:
                    kw_data[kw] = fake.uuid()

            elif 'query' in kw:
                kw_data[kw] = '?name=demo&ordering=name'

            elif 'token' in kw:
                kw_data[kw] = fake.token()

            url = url.replace(':'+kw,kw_data[kw])
            if kw in data: del data[kw]
    print(url,data,flush=True)
    return api.name, api.method, url, data


def request(session, name, method, url, data):
    response = session.__getattribute__(method.lower())(url,data=json.dumps(data))
    stats_check = 200
    try:
        assert response.status_code != 404
    except AssertionError:
        try:
            json.loads(response.content)
        except Exception:
            stats_check = 404
            print('Unable to find path')
    content = "{name}:" \
           "\n{path}" \
           "\nMethod: {method}" \
           "\nData: {data}" \
           "\nResponse: {response}\n\n".format(
                name=name,
                method=method,
                path=url,
                data=data,
                response=response)
    if stats_check == 200:
        LIST_OF_CHECKED_APIS.write(content)
    return content


if __name__ == '__main__':

    for f in glob.glob(os.path.join('./signatures/','*.yml'))[-3:]:
        session = requests.session()
        module = os.path.basename(f).split(".")[0]
        if module == 'customer':
            CUSTOMER_ID = fake_customer()
        if module == 'questionnaire':
            continue # this one is too messy with all the trailing _id and missing params
        with open(f,'r') as yin:
            y = yaml.load(yin)
        apis = [API(*api, group=group) for group, apis in y.items() for api in apis.items()]

        with open(os.path.join('./sample/','%s.txt'%module),'w') as sample:
            apis.sort(key=lambda x: METHOD_ORDER.index(x.method.lower()),reverse=True) # sort to POST, PUT, GET, DELETE
            for api in apis:
                setups = setup(api)
                sample.write(request(session,*setups))
                sample.flush()
    LIST_OF_CHECKED_APIS.close()
