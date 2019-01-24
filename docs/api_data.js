define({ "api": [
  {
    "type": "GET",
    "url": "questionnaire/reservation/:reservation/answer/:answer",
    "title": "Answer Info",
    "name": "AnswerInfo",
    "description": "<p>Request information about an Answer of an reservation</p>",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "answer",
            "description": "<p>UUID of an answer</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "reservation",
            "description": "<p>UUID of reservation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>An answer object</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "answer.reservation",
            "description": "<p>Reservation UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "answer.questionnaire",
            "description": "<p>Questionnaire UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "answer.content",
            "description": "<p>List of Answer contents</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "answer.origin",
            "description": "<p>Un-translated answer pdf file.</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "answer.translated",
            "description": "<p>Translated answer pdf file</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "answer.is_translated",
            "description": "<p>Whther the answer pdf file is translated</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "answer.translator",
            "description": "<p>C2E translator assigned to this answer.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The required <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Answer"
  },
  {
    "type": "POST",
    "url": "questionnaire/reservation/:reservation/answer/:answer",
    "title": "Create Answer",
    "name": "CreateAnswer",
    "description": "<p>Create an Answer</p>",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "reservation",
            "description": "<p>Reservation UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "content",
            "description": "<p>List of Answer contents</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "origin",
            "description": "<p>Un-translated answer pdf file.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of answeranswer</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The required <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Answer"
  },
  {
    "type": "DELETE",
    "url": "questionnaire/reservation/:reservation/answer/:answer",
    "title": "Delete Answer",
    "name": "DeleteAnswer",
    "description": "<p>Delete an Answer</p>",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "reservation",
            "description": "<p>UUID of a reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of an answer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of deleted answer</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "AnswerNotFound",
            "description": "<p>The required <code>id</code> of answer is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Answer"
  },
  {
    "type": "GET",
    "url": "questionnaire/answers/:query",
    "title": "List All Answers",
    "name": "ListAllAnswers",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort answers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Answer"
  },
  {
    "type": "GET",
    "url": "questionnaire/reservation/:reservation/answer/:query",
    "title": "List of Answers of Reservation",
    "name": "ListAnswer",
    "description": "<p>Request a list of answers based on query.</p>",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "reservation",
            "description": "<p>UUID of a reservation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the answer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "choices",
            "description": "<p>List of filterd/sorted answers.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Answer"
  },
  {
    "type": "PUT",
    "url": "questionnaire/reservation/:reservation/answer/:answer",
    "title": "Update Answer",
    "name": "UpdateAnswer",
    "description": "<p>Update an Answer</p>",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "choice",
            "description": "<p>Choice UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "reservation",
            "description": "<p>Reservation UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "content",
            "description": "<p>List of Answer contents</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "origin",
            "description": "<p>Un-translated answer pdf file.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "translated",
            "description": "<p>Translated answer pdf file</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_translated",
            "description": "<p>Whther the answer pdf file is translated</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "translator",
            "description": "<p>C2E translator assigned to this answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to authorize operation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of answeranswer</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The required <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "AnswerNotFound",
            "description": "<p>The required <code>id</code> of answer is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Answer"
  },
  {
    "type": "GET",
    "url": "questionnaire/admin/:questionnaire/question/:question/choice/:choice",
    "title": "Choice Info",
    "name": "ChoiceInfo",
    "description": "<p>Request information about a choice</p>",
    "group": "Choice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>UUID of questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "question",
            "description": "<p>UUID of question</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "choice",
            "description": "<p>UUID of choice</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "choice",
            "description": "<p>A choice object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "choice.content",
            "description": "<p>Question content</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The required <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Choice"
  },
  {
    "type": "POST",
    "url": "questionnaire/admin/:questionnaire/question/:question/choice",
    "title": "Create Choice",
    "name": "CreateChoice",
    "description": "<p>Create a choice</p>",
    "group": "Choice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID[]",
            "optional": false,
            "field": "question",
            "description": "<p>List of UUIDs of question this choice belongs to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "content",
            "description": "<p>List of choice contents.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID[]",
            "optional": false,
            "field": "id",
            "description": "<p>List of UUIDs of created choice</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Choice"
  },
  {
    "type": "DELETE",
    "url": "questionnaire/admin/:questionnaire/question/:question/choice/:choice",
    "title": "Delete Choice",
    "name": "DeleteChoice",
    "description": "<p>Delete a choice.</p>",
    "group": "Choice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of choice to be deleted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to authorize the operation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of deleted choice.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>The required <code>id</code> of choice is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Choice"
  },
  {
    "type": "GET",
    "url": "questionnaire/choices/:query",
    "title": "List All Choices",
    "name": "ListAllChoices",
    "group": "Choice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort choices</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Choice"
  },
  {
    "type": "GET",
    "url": "questionnaire/admin/:questionnaire/question/:question/choice",
    "title": "List of Choices of Questionnaire of  Question",
    "name": "ListChoice",
    "description": "<p>Request a list of choices of a question of a questionnaire</p>",
    "group": "Choice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>UUID of a questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "question",
            "description": "<p>UUID  of a question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the choice.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "choices",
            "description": "<p>List of filterd/sorted choices.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Choice"
  },
  {
    "type": "PUT",
    "url": "questionnaire/admin/:questionnaire/question/:question/choice/:choice",
    "title": "Update Choice",
    "name": "UpdateChoice",
    "description": "<p>Update a choice.</p>",
    "group": "Choice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Choice content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to authorize operation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Updated choice ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>The requested <code>id</code> of choice is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Choice"
  },
  {
    "type": "POST",
    "url": "/customer/dev/verify",
    "title": "Customer Dev Verification",
    "name": "CustomerDevVerify",
    "description": "<p>Handle request for customer registration activation in dev</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Mandatory customer UUID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "GET",
    "url": "/customer/profile/:customer_id",
    "title": "Customer Get Profile",
    "name": "CustomerGetProfile",
    "description": "<p>Request customer infomation.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Mandatory unique Customer ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Customer Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.email",
            "description": "<p>Customer email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.first_name",
            "description": "<p>Customer first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.last_name",
            "description": "<p>Customer last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.address",
            "description": "<p>Customer address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.tel",
            "description": "<p>Customer telephone.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/customer/login",
    "title": "Customer Login",
    "name": "CustomerLogin",
    "description": "<p>Handle customer login request.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/customer/logout",
    "title": "Customer Logout",
    "name": "CustomerLogout",
    "description": "<p>Handle customer logout request</p>",
    "group": "Customer",
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/customer/register",
    "title": "Customer Register",
    "name": "CustomerRegister",
    "description": "<p>Handle customer registration request.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Data structure contains authorization infomation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.email",
            "description": "<p>Mandatory email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.password_confirmation",
            "description": "<p>Mandatory confirmation password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.first_name",
            "description": "<p>Mandatory user first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.last_name",
            "description": "<p>Mandatory user last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Data structure contains customer information.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.address",
            "description": "<p>Mandatory address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer.tel",
            "description": "<p>Mandatory phone number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Registered user id.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Registered customer id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/customer/reset/password",
    "title": "Customer Reset Password",
    "name": "CustomerResetPassword",
    "description": "<p>Handle request from customer that forgets password.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory token key value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Mandatory confirmation password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/customer/reset",
    "title": "Customer Reset Password Request",
    "name": "CustomerResetPasswordRequest",
    "description": "<p>Handle request from customer that forgets password.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email address.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "PUT",
    "url": "/customer/profile",
    "title": "Customer Update Profile",
    "name": "CustomerUpdateProfile",
    "description": "<p>Update customer profile information.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Mandatory customer id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>Mandatory phone number.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/customer/verify",
    "title": "Customer Verification",
    "name": "CustomerVerify",
    "description": "<p>Handle request for customer registration activation</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory token key value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Mandatory customer UUID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "GET",
    "url": "/customer/verify/:email",
    "title": "Customer Verification Request",
    "name": "CustomerVerifyRequest",
    "description": "<p>Handle new request for email verification</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Mandatory customer UUID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
    "url": "/customer/:customer_id/patient/",
    "title": "Create patient",
    "name": "CreatePatient",
    "group": "Customer_Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "customer_id",
            "description": "<p>UUID of customer</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Mandatory birthdate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name_pinyin",
            "description": "<p>Mandatory first name pinyin.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>Mandatory gender, 0 Male, 1 Female, 2 Other</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name_pinyin",
            "description": "<p>Mandatory last name pinyin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Optional note.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passport",
            "description": "<p>Mandatory passport number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "relationship",
            "description": "<p>Mandatory replationship with user, 0 Self, 1 Relative, 2 Other</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory unique User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>On Successful creation, return patient_id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Customer_Patient"
  },
  {
    "type": "DELETE",
    "url": "customer/:customer_id/patient/:id",
    "title": "Delete a patient",
    "name": "DeletePatient",
    "group": "Customer_Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of deleted patient</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Customer_Patient"
  },
  {
    "type": "GET",
    "url": "/customer/:customer_id/patient/:query",
    "title": "List Patient of Customer",
    "name": "ListPatient",
    "group": "Customer_Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>String to sort/filter patients</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "customer_id",
            "description": "<p>UUID of a customer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "patients",
            "description": "<p>list of patients</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Customer_Patient"
  },
  {
    "type": "GET",
    "url": "customer/:customer_id/patient/:patient_id",
    "title": "Request Patient info",
    "name": "PatientInfo",
    "group": "Customer_Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "patient_id",
            "description": "<p>UUID of a patient</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "patients",
            "description": "<p>list of patients</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "patients.patient_id",
            "description": "<p>UUID of patient</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "patients.customer_id",
            "description": "<p>UUID of customer</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "patients.birthdate",
            "description": "<p>Mandatory birthdate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.first_name",
            "description": "<p>Mandatory first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.first_name_pinyin",
            "description": "<p>Mandatory first name pinyin.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "patients.gender",
            "description": "<p>Mandatory gender, 0 Male, 1 Female, 2 Other</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.last_name",
            "description": "<p>Mandatory last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.last_name_pinyin",
            "description": "<p>Mandatory last name pinyin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "patients.note",
            "description": "<p>Optional note.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.passport",
            "description": "<p>Mandatory passport number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "patients.relationship",
            "description": "<p>Mandatory replationship with user, 0 Self, 1 Relative, 2 Other</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Customer_Patient"
  },
  {
    "type": "PUT",
    "url": "/customer/:customer_id/patient/:patient_id",
    "title": "Update patient",
    "name": "UpdatePatient",
    "group": "Customer_Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "customer_id",
            "description": "<p>UUID of customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "patient_id",
            "description": "<p>Mandatory unique Patient ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "birthdate",
            "description": "<p>Mandatory birthdate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Mandatory first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name_pinyin",
            "description": "<p>Mandatory first name pinyin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>Mandatory gender with default &quot;M&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>Mandatory last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name_pinyin",
            "description": "<p>Mandatory last name pinyin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Optional note.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "passport_number",
            "description": "<p>Mandatory passport number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "relationship",
            "description": "<p>Mandatory replationship with user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "patient",
            "description": "<p>Updated patient object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Customer_Patient"
  },
  {
    "type": "GET",
    "url": "/disease/:id",
    "title": "Request Disease Information",
    "name": "DiseaseInfo",
    "description": "<p>Display information about a disease.</p>",
    "group": "Disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Disease unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "disease",
            "description": "<p>Disease Object</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "disease.id",
            "description": "<p>Disease UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.keyword",
            "description": "<p>Disease keyword.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.name",
            "description": "<p>Disease name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.full_name",
            "description": "<p>Disease full name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.name_end",
            "description": "<p>Diseae english name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.types",
            "description": "<p>Disease type 就诊科室</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.target_group",
            "description": "<p>Patients that are more likely to get this disease</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.introduciton",
            "description": "<p>Disease introduciton</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.categories",
            "description": "<p>Disease categories</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "DiseaseNotFound",
            "description": "<p>The <code>id</code> of the Disease was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/disease.py",
    "groupTitle": "Disease"
  },
  {
    "type": "GET",
    "url": "/disease/:query",
    "title": "List of Diseases",
    "name": "DiseaseList",
    "description": "<p>Display all diseases based on query</p>",
    "group": "Disease",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Srtring",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort disease</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "diseases",
            "description": "<p>List of filtered/sorted Diseases.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "diseases.id",
            "description": "<p>Disease UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.keyword",
            "description": "<p>Disease keyword.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.name",
            "description": "<p>Disease name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.full_name",
            "description": "<p>Disease full name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.name_end",
            "description": "<p>Diseae english name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.types",
            "description": "<p>Disease type 就诊科室</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.target_group",
            "description": "<p>Patients that are more likely to get this disease</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.introduciton",
            "description": "<p>Disease introduciton</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.categories",
            "description": "<p>Disease categories</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/disease.py",
    "groupTitle": "Disease"
  },
  {
    "type": "POST",
    "url": "/document/",
    "title": "Create Document",
    "name": "CreateDocument",
    "description": "<p>Create document.</p>",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "res",
            "description": "<p>UUID of reservation this document belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional description for document.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File Object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory document name</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "upload_at",
            "description": "<p>Mandatory document upload time.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "owner",
            "description": "<p>UUID of user uploaded the document</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Document type, 0 Original, 1 C2E translate, 2 feedback, 3 E2C translate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/document.py",
    "groupTitle": "Document"
  },
  {
    "type": "DELETE",
    "url": "/document/:id",
    "title": "Delete Document",
    "name": "DeleteDocument",
    "description": "<p>Delete a document.</p>",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of document</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of deleted document</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "DocumentNotFound",
            "description": "<p>The <code>id</code> of the document doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/document.py",
    "groupTitle": "Document"
  },
  {
    "type": "GET",
    "url": "/document/:query",
    "title": "List All Documents",
    "name": "ListDocument",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>query to filter Documents</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "documents",
            "description": "<p>List of documents Object</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "documents.res",
            "description": "<p>Reservation UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "documents.description",
            "description": "<p>description for document</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "documents.file",
            "description": "<p>file object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.name",
            "description": "<p>Document name</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "documents.upload_at",
            "description": "<p>Document upload time.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "documents.owner",
            "description": "<p>UUID of owner uploaded this document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "documents.type",
            "description": "<p>Document type, 0 Original, 1 C2E translate, 2 feedback, 3 E2C translate</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/document.py",
    "groupTitle": "Document"
  },
  {
    "type": "GET",
    "url": "/document/:id",
    "title": "Request Document Info",
    "name": "RequestDocument",
    "description": "<p>Request document information.</p>",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of document</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "document",
            "description": "<p>Document Object</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "document.id",
            "description": "<p>Document UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "document.res",
            "description": "<p>Reservation UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "document.description",
            "description": "<p>description for document</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "document.file",
            "description": "<p>file object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "document.name",
            "description": "<p>Document name</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "document.upload_at",
            "description": "<p>Document upload time.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "document.owner",
            "description": "<p>UUID of owner uploaded this document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "document.type",
            "description": "<p>Document type, 0 Original, 1 C2E translate, 2 feedback, 3 E2C translate</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "DocumentNotFound",
            "description": "<p>The <code>id</code> of the document doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/document.py",
    "groupTitle": "Document"
  },
  {
    "type": "PUT",
    "url": "/document/:id",
    "title": "Update Document",
    "name": "UpdateDocument",
    "description": "<p>Update a dicument</p>",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of document</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "res",
            "description": "<p>Reservation UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description for document</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>file object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Document name</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "upload_at",
            "description": "<p>Document upload time.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "owner",
            "description": "<p>UUID of owner uploaded this document</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Document type, 0 Original, 1 C2E translate, 2 feedback, 3 E2C translate</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/document.py",
    "groupTitle": "Document"
  },
  {
    "type": "GET",
    "url": "/hospital/:id",
    "title": "Request Hospital Information",
    "name": "HospitalInfo",
    "description": "<p>Display information about a hospital.</p>",
    "group": "Hospital",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Hospital unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hospital",
            "description": "<p>Hospital Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "hospital.id",
            "description": "<p>Hospital UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.name",
            "description": "<p>Hospital name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.email",
            "description": "<p>Hospital email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.image",
            "description": "<p>Hospital Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.introduction",
            "description": "<p>Hospital Brief Introduction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.area",
            "description": "<p>Hospital area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospital.overall_rank",
            "description": "<p>Hospital General Rank.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.website",
            "description": "<p>Hospital Website Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospital.average_score",
            "description": "<p>Average customer score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.specialty",
            "description": "<p>Hospital specialty.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospital.review_number",
            "description": "<p>Numbe of reviews.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ObjectNotFound",
            "description": "<p>The <code>id</code> of the Hospital was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/hospital.py",
    "groupTitle": "Hospital"
  },
  {
    "type": "GET",
    "url": "/hospital/:query",
    "title": "Request List of Hospitals",
    "name": "HospitalList",
    "description": "<p>Dispaly all hospitals based on query</p>",
    "group": "Hospital",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter hospitals</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hospitals",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "hospitals.id",
            "description": "<p>Hospital UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.name",
            "description": "<p>Hospital name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.email",
            "description": "<p>Hospital email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.image",
            "description": "<p>Hospital Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.introduction",
            "description": "<p>Hospital Brief Introduction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.area",
            "description": "<p>Hospital area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospitals.overall_rank",
            "description": "<p>Hospital General Rank.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.website",
            "description": "<p>Hospital Website Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospitals.average_score",
            "description": "<p>Average customer score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.specialty",
            "description": "<p>Hospital specialty.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospitals.review_number",
            "description": "<p>Numbe of reviews.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/hospital.py",
    "groupTitle": "Hospital"
  },
  {
    "type": "GET",
    "url": "/info/:query",
    "title": "Request List of Infos",
    "name": "InfoList",
    "description": "<p>Dispaly all Infos based on query</p>",
    "group": "Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter Infos</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Infos",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "Infos.id",
            "description": "<p>Info UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "Infos.hospital",
            "description": "<p>hospital UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "Infos.disease",
            "description": "<p>disease UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Infos.deposit",
            "description": "<p>Deposit number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Infos.full_price",
            "description": "<p>Full price number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Infos.rank",
            "description": "<p>specialty rank</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Infos.description",
            "description": "<p>Description of this Disease of this hospital Info</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Infos.feedback_time",
            "description": "<p>Feedback_time in weeks</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/info.py",
    "groupTitle": "Info"
  },
  {
    "type": "GET",
    "url": "/info/:info_id",
    "title": "Request Info Information",
    "name": "Info_info",
    "description": "<p>Display information about a Info.</p>",
    "group": "Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "info_id",
            "description": "<p>Info Uniquer id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Info",
            "description": "<p>Info Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "Info.id",
            "description": "<p>Info UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "Info.hospital",
            "description": "<p>hospital UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "Info.disease",
            "description": "<p>disease UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Info.deposit",
            "description": "<p>Deposit number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Info.full_price",
            "description": "<p>Full price number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Info.rank",
            "description": "<p>specialty rank</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Info.description",
            "description": "<p>Description of this Disease of this hospital Info</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Info.feedback_time",
            "description": "<p>Feedback_time in weeks</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ObjectNotFound",
            "description": "<p>The <code>id</code> of the Info was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/info.py",
    "groupTitle": "Info"
  },
  {
    "type": "GET",
    "url": "/info/like/:customer_id/:query",
    "title": "List Like Info",
    "name": "Like_Like_Info",
    "description": "<p>List all like info of a customer</p>",
    "group": "LikeInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>query to filter/sort Liked Info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/info.py",
    "groupTitle": "LikeInfo"
  },
  {
    "type": "POST",
    "url": "/info/like/:customer_id/",
    "title": "Like Info (Hospital-disease)",
    "name": "Like_info",
    "description": "<p>Create a Like Info</p>",
    "group": "LikeInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "info",
            "description": "<p>Info Unique id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "LikeInfo",
            "description": "<p>LikeInfo Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "LikeInfo.id",
            "description": "<p>Info UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "LikeInfo.info",
            "description": "<p>Like Info UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "LikeInfo.customer",
            "description": "<p>Customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "LikeInfo.like_time",
            "description": "<p>Date time of creation</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/info.py",
    "groupTitle": "LikeInfo"
  },
  {
    "type": "DELETE",
    "url": "/info/like/:customer_id/:likeInfo_id/",
    "title": "Un-Like Info (Hospital-disease)",
    "name": "Un_Like_info",
    "description": "<p>Delete a Like Info</p>",
    "group": "LikeInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "likeInfo_id",
            "description": "<p>LikeInfo Unique id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/info.py",
    "groupTitle": "LikeInfo"
  },
  {
    "type": "GET",
    "url": "/contact",
    "title": "Request contact info",
    "name": "ContactInfo",
    "description": "<p>Display contact information of the website.</p>",
    "group": "Miscellaneous",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>Whatever information we want to show the customers.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/miscellaneous.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "POST",
    "url": "/contact",
    "title": "Send email",
    "name": "SendEmail",
    "description": "<p>Send email to the company.</p>",
    "group": "Miscellaneous",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Mandatory email content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_address",
            "description": "<p>Mandatory email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Mandatory subject of the email to be sent.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>sent.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/miscellaneous.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "POST",
    "url": "/auth/send",
    "title": "Staff Send Email.",
    "name": "StaffSendEmail",
    "description": "<p>Staff send an email to user.</p>",
    "group": "Miscellaneous",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Mandatory email content..</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory user UUID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/miscellaneous.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "POST",
    "url": "/auth/password",
    "title": "Validate password",
    "name": "ValidatePassword",
    "description": "<p>Validate user's password input to authorize operations.</p>",
    "group": "Miscellaneous",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Unique staff user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A token that can be verified at backend to grant operation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Operation not authorized.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/miscellaneous.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "GET",
    "url": "/patients/:query",
    "title": "List All Patients",
    "name": "ListAllPatients",
    "group": "Patient_admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>query to filter/sort patients</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "patients",
            "description": "<p>List of patient objects</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "patients.customer_id",
            "description": "<p>UUID of customer</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "patients.birthdate",
            "description": "<p>Mandatory birthdate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.first_name",
            "description": "<p>Mandatory first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.first_name_pinyin",
            "description": "<p>Mandatory first name pinyin.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "patients.gender",
            "description": "<p>Mandatory gender, 0 Male, 1 Female, 2 Other</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.last_name",
            "description": "<p>Mandatory last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.last_name_pinyin",
            "description": "<p>Mandatory last name pinyin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "patients.note",
            "description": "<p>Optional note.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients.passport",
            "description": "<p>Mandatory passport number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "patients.relationship",
            "description": "<p>Mandatory replationship with user, 0 Self, 1 Relative, 2 Other</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Patient_admin"
  },
  {
    "type": "POST",
    "url": "questionnaire/admin/:questionnaire/question",
    "title": "Create Question",
    "name": "CreateQuestion",
    "description": "<p>Create a question</p>",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Question content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "formaat",
            "description": "<p>Quesiton format code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of created question</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Question"
  },
  {
    "type": "DELETE",
    "url": "questionnaire/admin/:questionnaire/question/:question",
    "title": "Delete Question",
    "name": "DeleteQuestion",
    "description": "<p>Delete a question.</p>",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of question to be deleted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to authorize the operation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of deleted question.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "questionnaire/questions/:query",
    "title": "List All Questions",
    "name": "ListAllQuestions",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort questions</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "questionnaire/admin/:questionnaire/question/:query",
    "title": "List of Quesiton of Questionnaire",
    "name": "ListQuestion",
    "description": "<p>Request a list of questions of a questionnaire.</p>",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the question.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "questions",
            "description": "<p>List of filterd/sorted question.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "questionnaire/admin/:questionnaire/question/:question",
    "title": "Question Info",
    "name": "QuestionInfo",
    "description": "<p>Request information about a quesiton</p>",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>UUID of questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "question",
            "description": "<p>UUID of question</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>A question object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question.content",
            "description": "<p>Question content</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "question.format",
            "description": "<p>Quesiton format code.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The required <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionNotFound",
            "description": "<p>The required <code>id</code> of question is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Question"
  },
  {
    "type": "PUT",
    "url": "questionnaire/admin/:questionnaire/question/:question",
    "title": "Update Question",
    "name": "UpdateQuestion",
    "description": "<p>Update a Question.</p>",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "questinnaire",
            "description": "<p>Questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "question",
            "description": "<p>Question UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Question content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "formaat",
            "description": "<p>Quesiton format code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Updated question ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestioneNotFound",
            "description": "<p>The requested <code>id</code> of question is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>The requested <code>id</code> of choice is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Question"
  },
  {
    "type": "POST",
    "url": "/questionnaire/admin",
    "title": "Create Questionnaire",
    "name": "CreateQuestionnaire",
    "description": "<p>Create a Questionnaire.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "translator",
            "description": "<p>Translator assigned to this questionnaire UUID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of this questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "hospital",
            "description": "<p>Hospital of this questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "disease",
            "description": "<p>Disease of this questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_translated",
            "description": "<p>Whther the questionnaire has been translated.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "translated",
            "description": "<p>Translated pdf file of questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "origin",
            "description": "<p>Untranslated pdf file of questionnaire</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Questionnaire ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "DELETE",
    "url": "/questionnaire/admin/:id",
    "title": "Delete Questionnaires",
    "name": "DeleteQuestionnarie",
    "description": "<p>Delete a questionnaire.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of questionnaire to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of deleted questionnaire.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The required <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "GET",
    "url": "/questionnaire/admin/:query",
    "title": "List of Questionnaires",
    "name": "ListQuestionnarie",
    "description": "<p>Request a list of questionnaires based on query.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the questionnaires.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "questionnaires",
            "description": "<p>List of filterd/sorted questionnaires.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "GET",
    "url": "/questionnaire/admin/:id",
    "title": "Request Questionnaire",
    "name": "QuestionnaireInfo",
    "description": "<p>Request questionnaire information.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Questionnaire UUID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaire Object</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire.id",
            "description": "<p>Questionnaire UUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire.translator",
            "description": "<p>Translator assigned to this questionnaire UUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "questionnaire.category",
            "description": "<p>Category of this questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire.hospital",
            "description": "<p>Hospital of this questionnaire UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "questionnaire.disease",
            "description": "<p>Disease of this questionnaire UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "questionnaire.is_translated",
            "description": "<p>Whther the questionnaire has been translated.</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "questionnaire.translated",
            "description": "<p>Translated pdf file of questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "questionnaire.origin",
            "description": "<p>Untranslated pdf file of questionnaire</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "GET",
    "url": "/questionnaire/:token",
    "title": "Questionnaire based on token",
    "name": "RequestQuetionnaire",
    "description": "<p>Request questionnaire based on signature token.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to be unsigned and get questionnaire</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "PUT",
    "url": "/questionnaire/admin/:id",
    "title": "Update Questionnaire",
    "name": "UpdateQuestionnaire",
    "description": "<p>Update a Questionnaire.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "translator",
            "description": "<p>Translator assigned to this questionnaire UUID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of this questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "hospital",
            "description": "<p>Hospital of this questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "disease",
            "description": "<p>Disease of this questionnaire UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "translated",
            "description": "<p>Whther the questionnaire has been translated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Updated questionnaire ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/questionnaire.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "GET",
    "url": "/requirement/:hospital_id/:disease_id",
    "title": "Request Document Requirement",
    "name": "DocumentRequirement",
    "description": "<p>Display document requirement.</p>",
    "group": "Requirement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Disease ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Hospital ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "requirements",
            "description": "<p>Document requirements for this combination of Hospital and Disease.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "RequirementNotFound",
            "description": "<p>The combination of <code>hospital_id</code> and <code>disease_id</code> of the Requirement was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/requirement.py",
    "groupTitle": "Requirement"
  },
  {
    "type": "POST",
    "url": "/reservation/:id/commit",
    "title": "Submit reservation information",
    "name": "CommitReservation",
    "description": "<p>Store the created reservation in the database.</p>",
    "group": "Reservation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ReservationExpired",
            "description": "<p>The slots reserved expired after 30 min.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "GET",
    "url": "/reservation/:id/info",
    "title": "Reservation info",
    "name": "GetReservationInfo",
    "description": "<p>Request reservation information.</p>",
    "group": "Reservation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reservation",
            "description": "<p>Reservation Object</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "reservation.commit_at",
            "description": "<p>Time of submission.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "reservation.ctime",
            "description": "<p>Time of creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reservation.disease_id",
            "description": "<p>Unique ID for disease.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.first_doctor_contact",
            "description": "<p>Diagnose-doctor contact info.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.first_doctor_name",
            "description": "<p>Diagnose-doctor name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.first_hospital",
            "description": "<p>Diagnose-hospital name.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservation.hospital_id",
            "description": "<p>Unique ID for hospital.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.note",
            "description": "<p>Note for the reservation.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservation.patient_id",
            "description": "<p>Unique ID for patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservation.res_id",
            "description": "<p>Reservation ID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservation.timeslot_id",
            "description": "<p>ID for reservation slot.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservation.user_id",
            "description": "<p>Unique ID for customer.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The <code>id</code> of the required reservation doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "POST",
    "url": "/reserve/:id/pay",
    "title": "Make payment",
    "name": "PayReservation",
    "description": "<p>Pay full payment or deposit for the reservation using third-part API</p>",
    "group": "Reservation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "type",
            "description": "<p>Full payment or deposite.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of reservation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token generated by third-party API for payment processing.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of Reservation.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "PaymentFailed",
            "description": "<p>The payment is not able to be processed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "PUT",
    "url": "/reservation/create",
    "title": "Create Reservation",
    "name": "ReservationInitiate",
    "description": "<p>Create Reservation instance, also record the creation time</p>",
    "group": "Reservation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Mandatory disease ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Mandatory hospital ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "patient_id",
            "description": "<p>Mandatory patient ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "timeslot_id",
            "description": "<p>Mandatory reservation slot ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory customer ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ReservationExpired",
            "description": "<p>The slots reserved expired after 30 min.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "POST",
    "url": "/reservation/:id/update",
    "title": "Update Reservation Information",
    "name": "ReservationUpdate",
    "description": "<p>Update reservation info fill in previous info</p>",
    "group": "Reservation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_diagnosed_doctor",
            "description": "<p>Optional diagnose-doctor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_diagnosed_doctor_contact",
            "description": "<p>Optional diagnose-doctor contact info.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_diagnosed_hospital",
            "description": "<p>Optional diagnose-hospital.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Optional other notes.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "reservation_id",
            "description": "<p>Mandatory Reservation unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": true,
            "field": "timeslot_id",
            "description": "<p>Optional reservation slot ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ReservationExpired",
            "description": "<p>The slots reserved expired after 30 min.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "DELETE",
    "url": "/reservation/admin/:res_id",
    "title": "Supervisor's operation to delete a Reservation",
    "name": "Delete_Reservation",
    "description": "<p>Remove a Reservation from Database.</p>",
    "group": "Reservation_admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "res_id",
            "description": "<p>Unique ID of a Reservation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "res_id",
            "description": "<p>Deleted reservation UUID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation_admin"
  },
  {
    "type": "GET",
    "url": "/reservation/admin/:query",
    "title": "Staff's operation to list reservations",
    "name": "ListReservations",
    "description": "<p>List all reservations.</p>",
    "group": "Reservation_admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort reservation, e.g. /reservation/admin/?first_doctor_name=asd&amp;ordering=-translator_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "res_id",
            "description": "<p>Updated reservation UUID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation_admin"
  },
  {
    "type": "PUT",
    "url": "/reservation/admin/:res_id",
    "title": "Staff's operation to update a Reservation",
    "name": "Update_Reservation",
    "description": "<p>Update the info of a Reservation.</p>",
    "group": "Reservation_admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "res_id",
            "description": "<p>Reservation UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "translator_e2c_id",
            "description": "<p>New E2C_Translator id.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "translator_c2e_id",
            "description": "<p>New C2E_Translator id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>New reservation status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trans_status",
            "description": "<p>New translation status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_hospital",
            "description": "<p>New Diagnose-hospital name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_doctor_contact",
            "description": "<p>New Diagnose-doctor contact info.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_doctor_name",
            "description": "<p>New Diagnose-doctor name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "res_id",
            "description": "<p>Updated reservation UUID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>The operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/reservations.py",
    "groupTitle": "Reservation_admin"
  },
  {
    "type": "GET",
    "url": "/search/:query",
    "title": "Seach Info by hospital",
    "name": "SeachHospital",
    "description": "<p>Search Info by hospital</p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>search criteria</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID[]",
            "optional": false,
            "field": "infos",
            "description": "<p>List of Info ids</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hospitals",
            "description": "<p>List of Hospital Objects</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "hospitals.id",
            "description": "<p>hospital UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Image",
            "optional": false,
            "field": "hospitals.image",
            "description": "<p>hospital Image, not ready yet, don't include for now</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "diseases",
            "description": "<p>List of Disease Objects</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "diseases.id",
            "description": "<p>diseases UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.name",
            "description": "<p>disease name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diseases.keyword",
            "description": "<p>disease keyword</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/search.py",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/:query",
    "title": "Seach Info By Hospital By Disease",
    "name": "SeachHospitalByDisease",
    "description": "<p>Search Info by hospital by disease</p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>search criteria</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID[]",
            "optional": false,
            "field": "infos",
            "description": "<p>List of Info ids</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hospitals",
            "description": "<p>List of Hospital Objects</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "hospitals.id",
            "description": "<p>hospital UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospitals.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Image",
            "optional": false,
            "field": "hospitals.image",
            "description": "<p>hospital Image, not ready yet, don't include for now</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "disease",
            "description": "<p>Disease Objects</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "disease.id",
            "description": "<p>diseases UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.name",
            "description": "<p>disease name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disease.keyword",
            "description": "<p>disease keyword</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/search.py",
    "groupTitle": "Search"
  },
  {
    "type": "PUT",
    "url": "/slot/admin/:slot_id",
    "title": "Admin Update Slot availablity",
    "name": "AdminUpdateSlot",
    "description": "<p>Update a slot. Might be deprecated if duplicate with UpdateSlot.</p>",
    "group": "Slot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "slot_id",
            "description": "<p>slot_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "slot",
            "description": "<p>Successfully reset slot</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/slot.py",
    "groupTitle": "Slot"
  },
  {
    "type": "GET",
    "url": "/slot/admin/",
    "title": "List slot availablity",
    "name": "ListSlot",
    "description": "<p>List slots.</p>",
    "group": "Slot",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "slots",
            "description": "<p>Successfully reset slot</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/slot.py",
    "groupTitle": "Slot"
  },
  {
    "type": "GET",
    "url": "/slot/availability",
    "title": "Request Slot Information",
    "name": "SlotDisplay",
    "description": "<p>Display information about a slot.</p>",
    "group": "Slot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease",
            "description": "<p>Disease ID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "hospital",
            "description": "<p>Hospital ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[4]",
            "optional": false,
            "field": "available",
            "description": "<p>Abailable slots for the next four weeks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available.availability",
            "description": "<p>slots left</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "available.disease",
            "description": "<p>disease id</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "available.hospital",
            "description": "<p>hospital id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "available.week_start",
            "description": "<p>time of week start</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "SlotNotFound",
            "description": "<p>The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/slot.py",
    "groupTitle": "Slot"
  },
  {
    "type": "PUT",
    "url": "/slot/batch/create",
    "title": "Create or Update Slot Information",
    "name": "UpdateSlot",
    "description": "<p>Update a slot.</p>",
    "group": "Slot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "hospital_list",
            "description": "<p>hospital list</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "hospital_list.disease_list",
            "description": "<p>disease list</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "hospital_list.disease_list.date_slots",
            "description": "<p>available slots on dates</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hospital_list.disease_list.date_slots.type",
            "description": "<p>&quot;add&quot; or &quot;change&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "hospital_list.disease_list.date_slots.dates",
            "description": "<p>slot date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_list.disease_list.date_slots.quantity",
            "description": "<p>slot total availablity</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "hospital_list.disease_list.disease_id",
            "description": "<p>disease ID</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "hospital_list.hospital_id",
            "description": "<p>hospital ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID[]",
            "optional": false,
            "field": "created",
            "description": "<p>Successfully created slots</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "error",
            "description": "<p>Slots runs into errors</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "error.detail",
            "description": "<p>detail reason</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "error.error",
            "description": "<p>Type of error</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "error.time_slot",
            "description": "<p>Slot ID runs into errors</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID[]",
            "optional": false,
            "field": "updated",
            "description": "<p>Successfully updated slots</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "SlotNotFound",
            "description": "<p>The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/slot.py",
    "groupTitle": "Slot"
  },
  {
    "type": "POST",
    "url": "/supervisor/user",
    "title": "Create a User",
    "name": "CreateUser",
    "description": "<p>Create a user.</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Optional address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmed_password",
            "description": "<p>Mandatory confirmation password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tel",
            "description": "<p>Optional phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "role",
            "description": "<p>0 for customer, 1 for c2e trans, 2 for e2c trans, 3 for sup, default 0</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "user_id",
            "description": "<p>Created user id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "EmailAlreadyExists",
            "description": "<p>The email exists in the DB.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "PasswordDoesNotMath",
            "description": "<p>The password does not match password_confirmation.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "DELETE",
    "url": "/supervisor/user/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "description": "<p>Delete user.</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory unique User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory token for authorizing operation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "user_id",
            "description": "<p>Deleted user UUID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "GET",
    "url": "/supervisor/user/:query",
    "title": "Request list of User",
    "name": "ListUser",
    "description": "<p>Request a list of users based on query.</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the users.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of filterd/sorted users.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "GET",
    "url": "staff/assignemnt/:staff_id/:query",
    "title": "Staff Assignemnt",
    "name": "StaffAssignment",
    "description": "<p>Request a list of staff's assignments (reservations).</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Staff UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>A qeury to filter/sort assignments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reservations",
            "description": "<p>List of reservation objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reservations.disease_id",
            "description": "<p>Unique ID for disease.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservations.res_id",
            "description": "<p>Reservation ID</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservations.timeslot_id",
            "description": "<p>ID for reservation slot.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservations.user_id",
            "description": "<p>Unique ID for customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservations.patient_id",
            "description": "<p>Unique ID for patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "reservations.hospital_id",
            "description": "<p>Unique ID for hospital.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "POST",
    "url": "/staff/login/",
    "title": "Staff Login",
    "name": "StaffLogin",
    "description": "<p>Handle staff login request.</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "user_id",
            "description": "<p>UUID of authorized staff user.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "staff_id",
            "description": "<p>UUID of authorized staff</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of  authorized staff</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "POST",
    "url": "/staff/logout",
    "title": "Staff Logout",
    "name": "StaffLogout",
    "description": "<p>Handle staff logout request</p>",
    "group": "Staff",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message (in the future a redirect_to will be implemented)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "GET",
    "url": "staff/:staff_id/summary",
    "title": "Summarize Website Stats",
    "name": "StaffSummary",
    "description": "<p>Request a summary of the website's stats.</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Staff user UUID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "num_reservation_done",
            "description": "<p>Number of done reservations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "num_reservation_translating",
            "description": "<p>Number of trasnlating reservations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "num_reservation_approving",
            "description": "<p>Number of approving reservations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "num_reservation",
            "description": "<p>Total number of reservations.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "POST",
    "url": "/supervisor/user/",
    "title": "Update User Info",
    "name": "UpdateUser",
    "description": "<p>Update user info.</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Optional User address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Optional] Optional User age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Optional User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Optional User first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>Optional User gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory unique User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>Optional User last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Optional User phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "qq",
            "description": "<p>Optional User qq.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory token for authorizing operation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "wechat",
            "description": "<p>Optional User wechat.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "user_id",
            "description": "<p>Updated user UUID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "AuthorizationFailed",
            "description": "<p>The operation is not authorized.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "GET",
    "url": "/supervisor/user/:id",
    "title": "Request User Info",
    "name": "UserInfo",
    "description": "<p>Request user info.</p>",
    "group": "Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory unique User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Mandatory User address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "user.age",
            "description": "<p>Optional User age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Mandatory User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.first_name",
            "description": "<p>Mandatory User first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "user.gender",
            "description": "<p>Optional User gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.last_name",
            "description": "<p>Mandatory User last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phone",
            "description": "<p>Mandatory User phone.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "user.qq",
            "description": "<p>Optional User qq.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "user.wechat",
            "description": "<p>Optional User wechat.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/staff.py",
    "groupTitle": "Staff"
  },
  {
    "type": "POST",
    "url": "/transaction/",
    "title": "Create a Transaction",
    "name": "CreateTransaction",
    "description": "<p>Create a Transaction</p>",
    "group": "Transaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment_type",
            "description": "<p>0 - Alipay, 1 - Wechat Pay</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goods_type",
            "description": "<p>0 for initial, 1 for remain, 2 for full amount</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "transactions",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "transactions.id",
            "description": "<p>Transaction UUID. Used as out_trade_number for Alipay</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "transactions.customer",
            "description": "<p>ID of the customer under whom this transaction was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.trade_no",
            "description": "<p>Trade number returned by Alipay or Wechat</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.total_amount",
            "description": "<p>Float number. Smallest unit is 0.01.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "transactions.created_at",
            "description": "<p>Datetime at which transaction is created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.goods_type",
            "description": "<p>0 for initial, 1 for remain, 2 for full amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.payment_type",
            "description": "<p>0 - Alipay, 1 - Wechat Pay</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "transactions.payment_at",
            "description": "<p>Datetime of a successful payment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.payment_status",
            "description": "<p>PAYING, TRADE_SUCCESS, TRADE_CLOSED, WAIT_BUYER_PAY, TRADE_FINISHED</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.url",
            "description": "<p>URL returned by Alipay or WeChat Pay</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "GET",
    "url": "/transaction/:id",
    "title": "Request Transaction Information",
    "name": "TransactionInfo",
    "description": "<p>Display information about a transaction.</p>",
    "group": "Transaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Transaction unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "transaction",
            "description": "<p>Transaction Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "transaction.id",
            "description": "<p>Transaction UUID. Used as out_trade_number for Alipay</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "transaction.customer",
            "description": "<p>ID of the customer under whom this transaction was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.trade_no",
            "description": "<p>Trade number returned by Alipay or Wechat</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.total_amount",
            "description": "<p>Float number. Smallest unit is 0.01.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "transaction.created_at",
            "description": "<p>Datetime at which transaction is created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.goods_type",
            "description": "<p>0 for initial, 1 for remain, 2 for full amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.payment_type",
            "description": "<p>0 - Alipay, 1 - Wechat Pay</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "transaction.payment_at",
            "description": "<p>Datetime of a successful payment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.payment_status",
            "description": "<p>PAYING, TRADE_SUCCESS, TRADE_CLOSED, WAIT_BUYER_PAY, TRADE_FINISHED</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.url",
            "description": "<p>URL returned by Alipay or WeChat Pay</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "ObjectNotFound",
            "description": "<p>The <code>id</code> of the Transaction was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "GET",
    "url": "/transaction/:query",
    "title": "Request List of Transactions",
    "name": "TransactionList",
    "description": "<p>Dispaly all transactions based on query</p>",
    "group": "Transaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter transactions</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "transactions",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "transactions.id",
            "description": "<p>Transaction UUID. Used as out_trade_number for Alipay</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "transactions.customer",
            "description": "<p>ID of the customer under whom this transaction was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.trade_no",
            "description": "<p>Trade number returned by Alipay or Wechat</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.total_amount",
            "description": "<p>Float number. Smallest unit is 0.01.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "transactions.created_at",
            "description": "<p>Datetime at which transaction is created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.goods_type",
            "description": "<p>0 for initial, 1 for remain, 2 for full amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transactions.payment_type",
            "description": "<p>0 - Alipay, 1 - Wechat Pay</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "transactions.payment_at",
            "description": "<p>Datetime of a successful payment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.payment_status",
            "description": "<p>PAYING, TRADE_SUCCESS, TRADE_CLOSED, WAIT_BUYER_PAY, TRADE_FINISHED</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.url",
            "description": "<p>URL returned by Alipay or WeChat Pay</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/transaction.py",
    "groupTitle": "Transaction"
  }
] });
