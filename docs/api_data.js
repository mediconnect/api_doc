define({ "api": [
  {
    "type": "post",
    "url": "/customer/forget_password",
    "title": "Forget Password",
    "name": "CustomerForgetPassword",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "captcha",
            "description": "<p>Validation code for identifying robot.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CaptchaDoesNotMatch",
            "description": "<p>The captcha does not match database entry.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailDoesNotExist",
            "description": "<p>The queried email does not exist in the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/info",
    "title": "Request Customer Info",
    "name": "CustomerInfo",
    "description": "<p>Request customer infomation.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
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
            "field": "customer.first_name",
            "description": "<p>Mandatory Customer first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.last_name",
            "description": "<p>Mandatory Customer last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "customer.age",
            "description": "<p>Optional Customer age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.address",
            "description": "<p>Mandatory Customer address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.email",
            "description": "<p>Mandatory Customer email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.phone",
            "description": "<p>Mandatory Customer phone.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "customer.wechat",
            "description": "<p>Optional Customer wechat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "customer.qq",
            "description": "<p>Optional Customer qq.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "customer.gender",
            "description": "<p>Optional Customer gender.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomerNotFound",
            "description": "<p>The <code>id</code> of the customer was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/login/",
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
    "filename": "api/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/register/",
    "title": "Customer Register",
    "name": "CustomerRegister",
    "description": "<p>Handle customer registration request.</p>",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Mandatory confirmation password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "tel",
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
            "field": "id",
            "description": "<p>Registered customer id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyExists",
            "description": "<p>The email exists in the DB.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordDoesNotMath",
            "description": "<p>The password does not match password_confirmation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/update_profile",
    "title": "Update Customer Profile Information",
    "name": "CustomerUpdateProfile",
    "description": "<p>Update customer profile information.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory customer name.</p>"
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
            "field": "address",
            "description": "<p>Mandatory address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tel",
            "description": "<p>Mandatory phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Mandatory old password.</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyExists",
            "description": "<p>The email address changes but also duplicate with another existing email address.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>The old password does not match the existing password in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordDoesNotMath",
            "description": "<p>The password does not match password_confirmation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/get_stored_patient_ids",
    "title": "Request Stored Patiente_IDs",
    "name": "GetStoredPatientIds",
    "description": "<p>Request a list of stored patient_ids.</p>",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
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
            "type": "Number[]",
            "optional": false,
            "field": "patient_ids",
            "description": "<p>Mandatory Patient IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "patient_names",
            "description": "<p>Mandatory Patient Names.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomerNotFound",
            "description": "<p>The <code>id</code> of the customer was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/disease/:id",
    "title": "Request Disease Information",
    "name": "DiseaseDisplay",
    "group": "Disease",
    "description": "<p>Display information about a disease.</p>",
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Disease name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Disease keyword</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Disease image</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DiseaseNotFound",
            "description": "<p>The <code>id</code> of the Disease was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/disease.py",
    "groupTitle": "Disease"
  },
  {
    "type": "post",
    "url": "/document",
    "title": "Create Document",
    "name": "CreateDocument",
    "group": "Document",
    "description": "<p>Create document.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document.description",
            "description": "<p>Mandatory document description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document.file_path",
            "description": "<p>Mandatory file_path</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document.name",
            "description": "<p>Mandatory document name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "document.note",
            "description": "<p>Optional note for document.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "document.upload_at",
            "description": "<p>Mandatory document upload time.</p>"
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
            "field": "document.id",
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
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/document.py",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document",
    "title": "Request Document Info",
    "name": "RequestDocument",
    "group": "Document",
    "description": "<p>Request document information.</p>",
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
            "type": "Stinrg",
            "optional": false,
            "field": "document.description",
            "description": "<p>Document description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "document.file_path",
            "description": "<p>File_path</p>"
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
            "type": "String",
            "optional": true,
            "field": "document.note",
            "description": "<p>Note for document</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "document.upload_at",
            "description": "<p>Document upload time.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DocumentNotFound",
            "description": "<p>The <code>id</code> of the document doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/document.py",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/hospital/:id",
    "title": "Request Hospital Information",
    "name": "HospitalDisplay",
    "group": "Hospital",
    "description": "<p>Display information about a hospital.</p>",
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Hospital Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hospital",
            "description": "<p>Hospital Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospital.rank",
            "description": "<p>Hospital General Rank.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.location",
            "description": "<p>Hospital Location.</p>"
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
            "field": "hospital.intro",
            "description": "<p>Hospital Brief Introduction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.url",
            "description": "<p>Hospital Website Link.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ObjectNotFound",
            "description": "<p>The <code>id</code> of the Hospital was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/hospital.py",
    "groupTitle": "Hospital"
  },
  {
    "type": "get",
    "url": "/hospitals/:query",
    "title": "Request List of Hospitals",
    "name": "HospitalList",
    "group": "Hospital",
    "description": "<p>Dispaly all hospitals based on query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Srtring",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort Hospitals</p>"
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
            "description": "<p>List of filtered/sorted Hospitals.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>pagination</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Hospital Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hospital.rank",
            "description": "<p>Hospital General Rank.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.location",
            "description": "<p>Hospital Location.</p>"
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
            "field": "hospital.intro",
            "description": "<p>Hospital Brief Introduction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hospital.url",
            "description": "<p>Hospital Website Link.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/hospital.py",
    "groupTitle": "Hospital"
  },
  {
    "type": "get",
    "url": "/contact",
    "title": "Request contact info",
    "name": "ContactInfo",
    "group": "Miscellaneous",
    "description": "<p>Display contact information of the website.</p>",
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
    "filename": "api/miscellaneous.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "get",
    "url": "/questionnaire/:id/:token",
    "title": "Request Questionnaire",
    "name": "RequestQuestionnaire",
    "description": "<p>Request questionnaire information.</p>",
    "group": "Miscellaneous",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Questionnaire ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token for authorization.</p>"
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
            "description": "<p>Questionnaire Document.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "formats",
            "description": "<p>Question formats.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "contents",
            "description": "<p>Quesiton contents.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "choices",
            "description": "<p>Quesiton choices.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1/ 200 OK\n{\n\"formats\":[\t\"Multiple Choice\",\n\"Short Answer\",\n\"Multiple Choice\",\n],\n\"contents\":[\"Who is your daddy?\",\n\"Who is your second daddy?\",\n\"Who is your mom?\",\n]\n\"choices\":[\t\"A$Alen|B$Bob|C$Charles\",\n\"\",\n\"A$Alex|B$Bruce|C$Champ\",\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/miscellaneous.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "post",
    "url": "/contact",
    "title": "Send email",
    "name": "SendEmail",
    "group": "Miscellaneous",
    "description": "<p>Send email to the company.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Mandatory subject of the email to be sent.</p>"
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
            "field": "content",
            "description": "<p>Mandatory email content.</p>"
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
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/miscellaneous.py",
    "groupTitle": "Miscellaneous"
  },
  {
    "type": "post",
    "url": "/patient/create",
    "title": "Create patient",
    "name": "CreatePatient",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory unique User ID.</p>"
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
            "field": "first_name_pinyin",
            "description": "<p>Mandatory first name pinyin.</p>"
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
            "optional": false,
            "field": "gender",
            "description": "<p>Mandatory gender with default &quot;M&quot;.</p>"
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
            "field": "relationship",
            "description": "<p>Mandatory replationship with user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passport_number",
            "description": "<p>Mandatory passport number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Optional note.</p>"
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
            "field": "patient_id",
            "description": "<p>On Successful creation, return patient_id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/patient.py",
    "groupTitle": "Patient"
  },
  {
    "type": "get",
    "url": "/patient/:id/info",
    "title": "Request patient info",
    "name": "PatientInfo",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory unique Patient ID.</p>"
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
            "field": "first_name",
            "description": "<p>Mandatory first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name_pinyin",
            "description": "<p>Mandatory first name pinyin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name_pinyin",
            "description": "<p>Mandatory last name pinyin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Mandatory gender with default &quot;M&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Mandatory birthdate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>Mandatory replationship with user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "passport_number",
            "description": "<p>Mandatory passport number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Optional note.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PatientNotFound",
            "description": "<p>The <code>id</code> of patient is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/patient.py",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/patient/:patient_id/update",
    "title": "Update patient",
    "name": "UpdatePatient",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "patient_id",
            "description": "<p>Mandatory unique Patient ID.</p>"
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
            "field": "last_name",
            "description": "<p>Mandatory last name.</p>"
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
            "field": "last_name_pinyin",
            "description": "<p>Mandatory last name pinyin.</p>"
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
            "type": "DateTime",
            "optional": true,
            "field": "birthdate",
            "description": "<p>Mandatory birthdate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "relationship",
            "description": "<p>Mandatory replationship with user.</p>"
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
            "field": "note",
            "description": "<p>Optional note.</p>"
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
            "field": "msg",
            "description": "<p>Successfully update patient.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/patient.py",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/patient/:patient_id/visit_history/add",
    "title": "Create patient previous hospital visit history",
    "name": "UpdatePatient",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "patient_id",
            "description": "<p>Mandatory unique Patient ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hospital_name",
            "description": "<p>Mandatory hospital visited.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "doctor_name",
            "description": "<p>Mandatory doctor consulted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_info",
            "description": "<p>Mandatory doctor contact info.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disease_category",
            "description": "<p>Mandatory main disease category for the visit.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "visit_date",
            "description": "<p>Optional visit date.</p>"
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
            "field": "visit_id",
            "description": "<p>On success, return visit history id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/patient.py",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/supervisor/questionnaire/:hospital_id/:disease_id/:category",
    "title": "Create Questionnaire",
    "name": "CreateQuestionnaire",
    "description": "<p>Create a Questionnaire.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Mandatory Hospital ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Mandatory Disease ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory questionnaire category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "formats",
            "description": "<p>Mandatory question formats.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "contents",
            "description": "<p>Mandatory quesiton contents.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "choices",
            "description": "<p>Mandatory quesiton choices.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "translator_C2E.id",
            "description": "<p>Mandatory translator assigned ID.</p>"
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
            "field": "questionnaire_id",
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
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "get",
    "url": "/translator/questionnaire/:id",
    "title": "Request Questionnaire",
    "name": "RequestQuestionnaire",
    "description": "<p>Request questionnaire information.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Questionnaire ID.</p>"
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
            "description": "<p>Questionnaire Document.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/translator.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "get",
    "url": "/supervisor/questionnaire/:hospital_id/:disease_id/:category",
    "title": "Request Questionnaire",
    "name": "RequestQuestionnaire",
    "description": "<p>Request questionnaire information.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Mandatory Hospital ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Mandatory Disease ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory questionnaire category.</p>"
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
            "description": "<p>Questionnaire Document.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "formats",
            "description": "<p>Question formats.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "contents",
            "description": "<p>Quesiton contents.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "choices",
            "description": "<p>Quesiton choices.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "translaotr_E2C.id",
            "description": "<p>The id of translator assigned.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "translated",
            "description": "<p>Whther the questionnaire has been translated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1/ 200 OK\n{\n\"formats\":[\t\"Multiple Choice\",\n\"Short Answer\",\n\"Multiple Choice\",\n],\n\"contents\":[\"Who is your daddy?\",\n\"Who is your second daddy?\",\n\"Who is your mom?\",\n]\n\"choices\":[\t\"A$Alen|B$Bob|C$Charles\",\n\"\",\n\"A$Alex|B$Bruce|C$Champ\",\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "put",
    "url": "/supervisor/questionnaire/:hospital_id/:disease_id/:category",
    "title": "Update Questionnaire",
    "name": "UpdateQuestionnaire",
    "description": "<p>Update a Questionnaire.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Mandatory Hospital ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Mandatory Disease ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory questionnaire category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "formats",
            "description": "<p>Optional question formats.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "contents",
            "description": "<p>Optional quesiton contents.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "choices",
            "description": "<p>Optional quesiton choices.</p>"
          },
          {
            "group": "Parameter",
            "type": "Numebr",
            "optional": true,
            "field": "translator_C2E.id",
            "description": "<p>Optional translator assigned ID.</p>"
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
            "field": "questionnaire_id",
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
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "put",
    "url": "/translator/questionnaire/:id",
    "title": "Update Questionnaire",
    "name": "UpdateQuestionnaire",
    "description": "<p>Update questionnaire with translated document.</p>",
    "group": "Questionnaire",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Questionnaire ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "document",
            "description": "<p>Mandatory Questionnaire Document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory token for authorization.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/translator.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "get",
    "url": "/requirement/:hospital_id/:disease_id",
    "title": "Request Document Requirement",
    "name": "DocumentRequirement",
    "group": "Requirement",
    "description": "<p>Display document requirement.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Hospital ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Disease ID</p>"
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
            "optional": false,
            "field": "RequirementNotFound",
            "description": "<p>The combination of <code>hospital_id</code> and <code>disease_id</code> of the Requirement was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/requirement.py",
    "groupTitle": "Requirement"
  },
  {
    "type": "post",
    "url": "/reservation/:id/commit",
    "title": "Submit reservation information",
    "name": "CommitReservation",
    "group": "Reservation",
    "description": "<p>Store the created reservation in the database.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationExpired",
            "description": "<p>The slots reserved expired after 30 min.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "get",
    "url": "/reservation/:id/info",
    "title": "Reservation info",
    "name": "GetReservationInfo",
    "group": "Reservation",
    "description": "<p>Request reservation information.</p>",
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
            "type": "Number",
            "optional": false,
            "field": "reservation.user_id",
            "description": "<p>Unique ID for customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reservation.patient_id",
            "description": "<p>Unique ID for patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reservation.hospital_id",
            "description": "<p>Unique ID for hospital.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "reservation.slot_id",
            "description": "<p>ID for reservation slot.</p>"
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
            "type": "DateTime",
            "optional": false,
            "field": "reservation.commit_at",
            "description": "<p>Time of submission.</p>"
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
            "type": "String",
            "optional": false,
            "field": "reservation.first_doctor_name",
            "description": "<p>Diagnose-doctor name.</p>"
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
            "field": "reservation.note",
            "description": "<p>Note for the reservation.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The <code>id</code> of the required reservation doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "post",
    "url": "/reserve/:id/pay",
    "title": "Make payment",
    "name": "PayReservation",
    "group": "Reservation",
    "description": "<p>Pay full payment or deposit for the reservation using third-part API</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of reservation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "type",
            "description": "<p>Full payment or deposite.</p>"
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
            "optional": false,
            "field": "PaymentFailed",
            "description": "<p>The payment is not able to be processed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "put",
    "url": "/reservation/create",
    "title": "Create Reservation",
    "name": "ReservationInitiate",
    "group": "Reservation",
    "description": "<p>Create Reservation instance, also record the creation time</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Mandatory customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "patient_id",
            "description": "<p>Mandatory patient ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Mandatory hospital ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Mandatory disease ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "slot_id",
            "description": "<p>Mandatory reservation slot ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationExpired",
            "description": "<p>The slots reserved expired after 30 min.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "post",
    "url": "/reservation/:id/update",
    "title": "Update Reservation Information",
    "name": "ReservationUpdate",
    "group": "Reservation",
    "description": "<p>Update reservation info: fill in previous info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reservation_id",
            "description": "<p>Mandatory Reservation unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "slot_id",
            "description": "<p>Optional reservation slot ID.</p>"
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
            "field": "note",
            "description": "<p>Optional other notes.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationExpired",
            "description": "<p>The slots reserved expired after 30 min.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/reservations.py",
    "groupTitle": "Reservation"
  },
  {
    "type": "get",
    "url": "/slot/:hospital_id/:disease_id",
    "title": "Request Slot Information",
    "name": "SlotDisplay",
    "group": "Slot",
    "description": "<p>Display information about a slot.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Hospital ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Disease ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[4]",
            "optional": false,
            "field": "available",
            "description": "<p>Abailable slots for the next four weeks.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SlotNotFound",
            "description": "<p>The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/slot.py",
    "groupTitle": "Slot"
  },
  {
    "type": "put",
    "url": "/slot/:hospital_id/:disease_id",
    "title": "Update Slot Information",
    "name": "UpdateSlot",
    "group": "Slot",
    "description": "<p>Update a slot.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Hospital ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "disease_id",
            "description": "<p>Disease ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[4]",
            "optional": false,
            "field": "available",
            "description": "<p>Abailable slots for the next four weeks.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to verify authorization.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SlotNotFound",
            "description": "<p>The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/slot.py",
    "groupTitle": "Slot"
  },
  {
    "type": "post",
    "url": "/supervisor/create",
    "title": "Create User",
    "name": "CreateSupervisor",
    "description": "<p>Create a supervisor type of user.</p>",
    "group": "Supervisor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Mandatory user type.</p>"
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
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Mandatory confirmation password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "tel",
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
            "field": "id",
            "description": "<p>Registered supervisor id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyExists",
            "description": "<p>The email exists in the DB.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordDoesNotMath",
            "description": "<p>The password does not match password_confirmation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "post",
    "url": "/supervisor/register",
    "title": "Create Supervisor",
    "name": "CreateSupervisor",
    "description": "<p>Create a supervisor type of user.</p>",
    "group": "Supervisor",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Mandatory confirmation password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "tel",
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
            "field": "id",
            "description": "<p>Registered supervisor id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyExists",
            "description": "<p>The email exists in the DB.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordDoesNotMath",
            "description": "<p>The password does not match password_confirmation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "delete",
    "url": "/supervisor/user/",
    "title": "Delete",
    "name": "Delete",
    "description": "<p>Delete user.</p>",
    "group": "Supervisor",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFailed",
            "description": "<p>The operation is not authorized.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "delete",
    "url": "/supervisor/reservation/:id",
    "title": "Delete a Reservation",
    "name": "Delete_Reservation",
    "group": "Supervisor",
    "description": "<p>Remove a Reservation from Database.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of a Reservation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to verify authorization.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "get",
    "url": "/supervisor/user/:role/:query",
    "title": "Request list of User",
    "name": "ListCustomers",
    "group": "Supervisor",
    "description": "<p>Request a list of customers based on query.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the customers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Type of users to list.</p>"
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
            "field": "page",
            "description": "<p>Pagination.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>Total pages.</p>"
          },
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
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "get",
    "url": "/supervisor/reservations/:query",
    "title": "Request list of Reservations",
    "name": "ListReservation",
    "group": "Supervisor",
    "description": "<p>Request a list of reservation based on query.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the reservations.</p>"
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
            "field": "page",
            "description": "<p>Pagination.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>Total pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reservations",
            "description": "<p>List of filterd/sorted reservations.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "get",
    "url": "/supervisor/reservation/documents/:id/:type",
    "title": "Request Documents associated with a Reservation",
    "name": "ReservationDocuments",
    "group": "Supervisor",
    "description": "<p>Request the documents associated with a reservation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Reservation unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Document type</p>"
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
            "field": "documents",
            "description": "<p>List of Document Objects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "get",
    "url": "/supervisor/reservation/:id",
    "title": "Request info of a Reservation",
    "name": "ReservationInfo",
    "group": "Supervisor",
    "description": "<p>Request the informaiton of a Reservation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
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
            "type": "Object",
            "optional": false,
            "field": "reservation",
            "description": "<p>Reservation Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reservation.id",
            "description": "<p>Reservation unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.customer.name",
            "description": "<p>Customer name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservaiton.reservation_patient.name",
            "description": "<p>Reservation_patient name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.disease.name",
            "description": "<p>Disease name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.hospital.name",
            "description": "<p>Hospital name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.translator_C2E_name",
            "description": "<p>C2E_Translator name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.translator_E2C_name",
            "description": "<p>E2C_Translaotr name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.status",
            "description": "<p>Reservation status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservaiton.trans_status",
            "description": "<p>Reservation translating status.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "reservation.deadline",
            "description": "<p>Reservation deadline to upload to hospital.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "reservation.trans_deadline",
            "description": "<p>Reservation translating deadline.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "reservation.last_upload",
            "description": "<p>Last upload DateTime of documents associated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "reservation.re_assigned",
            "description": "<p>Whether reservation has been reassigned.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "post",
    "url": "/supervisor/questionnaire_link",
    "title": "Send qestionnaire link via email",
    "name": "SendResetLink",
    "group": "Supervisor",
    "description": "<p>Send reset link to users.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_address",
            "description": "<p>Mandatory to_email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory unique User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reservation_id",
            "description": "<p>Mandatory unique Reservation id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory hashed token for temporary reset link.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "post",
    "url": "/supervisor/reset_link",
    "title": "Send reset link via email",
    "name": "SendResetLink",
    "group": "Supervisor",
    "description": "<p>Send reset link to users.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_address",
            "description": "<p>Mandatory to_email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory unique User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory hashed token for temporary reset link.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "post",
    "url": "/supervisor/login/",
    "title": "Supervisor Login",
    "name": "SupervisorLogin",
    "description": "<p>Handle supervisor login request.</p>",
    "group": "Supervisor",
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
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "get",
    "url": "/summary",
    "title": "Summarize Website Stats",
    "name": "SupervisorSummary",
    "group": "Supervisor",
    "description": "<p>Request a summary of the website's stats.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>Whatever summary we want to display for the supervisor.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "put",
    "url": "/supervisor/user/",
    "title": "Update User Info",
    "name": "UpdateUser",
    "description": "<p>Update user infomation.</p>",
    "group": "Supervisor",
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
            "optional": true,
            "field": "user.first_name",
            "description": "<p>Optional User first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user.last_name",
            "description": "<p>Optional User last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "user.age",
            "description": "<p>Optional] Optional User age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user.address",
            "description": "<p>Optional User address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user.email",
            "description": "<p>Optional User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user.phone",
            "description": "<p>Optional User phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user.wechat",
            "description": "<p>Optional User wechat.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user.qq",
            "description": "<p>Optional User qq.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user.gender",
            "description": "<p>Optional User gender.</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFailed",
            "description": "<p>The operation is not authorized.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "put",
    "url": "/supervisor/reservation/:id",
    "title": "Update a Reservation",
    "name": "Update_Reservation",
    "group": "Supervisor",
    "description": "<p>Update the informaiton of a Reservation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of a Reservation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "translator_C2E.id",
            "description": "<p>New C2E_Translator id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "translator_E2C.id",
            "description": "<p>New E2C_Translaotr id.</p>"
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
            "description": "<p>New translating status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to verify authorization.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>The operation is invalid at this stage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "get",
    "url": "/supervisor/user/",
    "title": "Request User Info",
    "name": "UserInfo",
    "description": "<p>Request user infomation.</p>",
    "group": "Supervisor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
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
            "field": "user.first_name",
            "description": "<p>Mandatory User first name.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "user.age",
            "description": "<p>Optional User age.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Mandatory User email.</p>"
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
            "field": "user.wechat",
            "description": "<p>Optional User wechat.</p>"
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
            "field": "user.gender",
            "description": "<p>Optional User gender.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "post",
    "url": "/supervisor/password",
    "title": "Validate password",
    "name": "ValidatePassword",
    "description": "<p>Validate supervisor's password input to authorize operations.</p>",
    "group": "Supervisor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Supervisor ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status_code",
            "description": "<p>Optional status code for stage control</p>"
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
            "description": "<p>Token generated for authorization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SupervisorNotFound",
            "description": "<p>The requested <code>id</code> of supervisor is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "post",
    "url": "/translator/register",
    "title": "Create Translator",
    "name": "CreateTranslator",
    "description": "<p>Create a translator type of user.</p>",
    "group": "Translator",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Mandatory confirmation password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "tel",
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
            "field": "id",
            "description": "<p>Registered translator id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyExists",
            "description": "<p>The email exists in the DB.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordDoesNotMath",
            "description": "<p>The password does not match password_confirmation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "get",
    "url": "/translator/reservations/:query",
    "title": "Request list of Reservations",
    "name": "ListReservation",
    "group": "Translator",
    "description": "<p>Request a list of reservation based on query.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query to filter/sort the reservations.</p>"
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
            "field": "page",
            "description": "<p>Pagination.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>Total pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reservations",
            "description": "<p>List of filterd/sorted reservations.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "get",
    "url": "/translator/reservation/:id",
    "title": "Request info of a Reservation",
    "name": "ReservationInfo",
    "group": "Translator",
    "description": "<p>Request the informaiton of a Reservation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
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
            "type": "Object",
            "optional": false,
            "field": "reservation",
            "description": "<p>Reservation Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reservation.id",
            "description": "<p>Reservation unique id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.customer.name",
            "description": "<p>Customer name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservaiton.reservation_patient.name",
            "description": "<p>Reservation_patient name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.disease.name",
            "description": "<p>Disease name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.hospital.name",
            "description": "<p>Hospital name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "reservation.translator_C2E_name",
            "description": "<p>C2E_Translator name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "reservation.translator_E2C_name",
            "description": "<p>E2C_Translaotr name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservaiton.trans_status",
            "description": "<p>Reservation translating status.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "reservation.trans_deadline",
            "description": "<p>Reservation translating deadline.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "reservation.last_upload",
            "description": "<p>Last upload DateTime of documents associated.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "post",
    "url": "/translator/login/",
    "title": "Translator Login",
    "name": "TranslatorLogin",
    "description": "<p>Handle translator login request.</p>",
    "group": "Translator",
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
    "filename": "api/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "put",
    "url": "/translator/reservation/:id",
    "title": "Update a Reservation",
    "name": "Update_Reservation",
    "group": "Translator",
    "description": "<p>Update the informaiton of a Reservation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of a Reservation.</p>"
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
            "description": "<p>New translating status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to verify authorization.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>The operation is invalid at this stage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "post",
    "url": "/translator/password",
    "title": "Validate password",
    "name": "ValidatePassword",
    "description": "<p>Validate translaotr's password input to authorize operations.</p>",
    "group": "Translator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Translator ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status_code",
            "description": "<p>Optional status code for stage control</p>"
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
            "description": "<p>Token generated for authorization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/translator.py",
    "groupTitle": "Translator"
  }
] });
