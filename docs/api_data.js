define({ "api": [
  {
    "type": "POST",
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
            "field": "captcha",
            "description": "<p>Validation code for identifying robot.</p>"
          },
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "CaptchaDoesNotMatch",
            "description": "<p>The captcha does not match database entry.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "EmailDoesNotExist",
            "description": "<p>The queried email does not exist in the database.</p>"
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
            "field": "customer.address",
            "description": "<p>Mandatory Customer address.</p>"
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
            "field": "customer.email",
            "description": "<p>Mandatory Customer email.</p>"
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
            "optional": true,
            "field": "customer.gender",
            "description": "<p>Optional Customer gender.</p>"
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
            "type": "String",
            "optional": false,
            "field": "customer.phone",
            "description": "<p>Mandatory Customer phone.</p>"
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
            "field": "customer.wechat",
            "description": "<p>Optional Customer wechat.</p>"
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
            "field": "CustomerNotFound",
            "description": "<p>The <code>id</code> of the customer was not found.</p>"
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
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
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
            "field": "address",
            "description": "<p>Mandatory address.</p>"
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
            "field": "name",
            "description": "<p>Mandatory name.</p>"
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
    "filename": "build/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "POST",
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
            "field": "address",
            "description": "<p>Mandatory address.</p>"
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
            "field": "name",
            "description": "<p>Mandatory customer name.</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "EmailAlreadyExists",
            "description": "<p>The email address changes but also duplicate with another existing email address.</p>"
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
          },
          {
            "group": "Error 4xx",
            "type": "ErrorType",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>The old password does not match the existing password in the database.</p>"
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
            "type": "ErrorType",
            "optional": false,
            "field": "CustomerNotFound",
            "description": "<p>The <code>id</code> of the customer was not found.</p>"
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
    "url": "/disease/:id",
    "title": "Request Disease Information",
    "name": "DiseaseDisplay",
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
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Disease image</p>"
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
            "field": "name",
            "description": "<p>Disease name</p>"
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
    "type": "POST",
    "url": "/document",
    "title": "Create Document",
    "name": "CreateDocument",
    "description": "<p>Create document.</p>",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Mandatory document description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_path",
            "description": "<p>Mandatory file_path</p>"
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
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Optional note for document.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "upload_at",
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
    "type": "GET",
    "url": "/document",
    "title": "Request Document Info",
    "name": "RequestDocument",
    "description": "<p>Request document information.</p>",
    "group": "Document",
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
    "url": "/hospital/:id",
    "title": "Request Hospital Information",
    "name": "HospitalDisplay",
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
            "field": "hospital.location",
            "description": "<p>Hospital Location.</p>"
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
            "field": "hospital.url",
            "description": "<p>Hospital Website Link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Hospital Name.</p>"
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
    "url": "/hospitals/:query",
    "title": "Request List of Hospitals",
    "name": "HospitalList",
    "description": "<p>Dispaly all hospitals based on query</p>",
    "group": "Hospital",
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
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Hospital Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>Hospital Brief Introduction.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Hospital Location.</p>"
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
            "field": "page",
            "description": "<p>pagination</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rank",
            "description": "<p>Hospital General Rank.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Hospital Website Link.</p>"
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
    "type": "GET",
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
            "type": "String[]",
            "optional": false,
            "field": "choices",
            "description": "<p>Quesiton choices.</p>"
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
    "url": "/patient/create",
    "title": "Create patient",
    "name": "CreatePatient",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Mandatory gender with default &quot;M&quot;.</p>"
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
            "field": "passport_number",
            "description": "<p>Mandatory passport number.</p>"
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
            "field": "patient_id",
            "description": "<p>On Successful creation, return patient_id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Patient"
  },
  {
    "type": "GET",
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
            "type": "DateTime",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Mandatory birthdate.</p>"
          },
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
            "field": "first_name_pinyin",
            "description": "<p>Mandatory first name pinyin.</p>"
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
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last name.</p>"
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
            "field": "note",
            "description": "<p>Optional note.</p>"
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
            "field": "relationship",
            "description": "<p>Mandatory replationship with user.</p>"
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
            "field": "PatientNotFound",
            "description": "<p>The <code>id</code> of patient is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/patient.py",
    "groupTitle": "Patient"
  },
  {
    "type": "POST",
    "url": "/patient/:patient_id/visit_history/add",
    "title": "Create patient previous hospital visit history",
    "name": "UpdatePatient",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "type": "String",
            "optional": false,
            "field": "doctor_name",
            "description": "<p>Mandatory doctor consulted.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "patient_id",
            "description": "<p>Mandatory unique Patient ID.</p>"
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
    "filename": "build/patient.py",
    "groupTitle": "Patient"
  },
  {
    "type": "POST",
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
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory questionnaire category.</p>"
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
            "type": "String[]",
            "optional": false,
            "field": "contents",
            "description": "<p>Mandatory quesiton contents.</p>"
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
            "type": "String[]",
            "optional": false,
            "field": "formats",
            "description": "<p>Mandatory question formats.</p>"
          },
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
            "field": "id",
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
            "type": "ErrorType",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
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
    "filename": "build/supervisor.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "GET",
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
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory questionnaire category.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "hospital_id",
            "description": "<p>Mandatory Hospital ID.</p>"
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
            "field": "choices",
            "description": "<p>Quesiton choices.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "id",
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
    "filename": "build/supervisor.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "GET",
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
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/translator.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "PUT",
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
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory questionnaire category.</p>"
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
            "type": "String[]",
            "optional": true,
            "field": "contents",
            "description": "<p>Optional quesiton contents.</p>"
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
            "type": "String[]",
            "optional": true,
            "field": "formats",
            "description": "<p>Optional question formats.</p>"
          },
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
            "optional": true,
            "field": "id",
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
    "filename": "build/supervisor.py",
    "groupTitle": "Questionnaire"
  },
  {
    "type": "PUT",
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
            "type": "Object",
            "optional": false,
            "field": "document",
            "description": "<p>Mandatory Questionnaire Document.</p>"
          },
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
            "type": "ErrorType",
            "optional": false,
            "field": "QuestionnaireNotFound",
            "description": "<p>The requested <code>id</code> of questionnaire is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/translator.py",
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
    "description": "<p>Update reservation info: fill in previous info</p>",
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
    "url": "/reservation/admin/:id",
    "title": "Supervisor's operation to delete a Reservation",
    "name": "Delete_Reservation",
    "description": "<p>Remove a Reservation from Database.</p>",
    "group": "Reservation_admin",
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
            "type": "ErrorType",
            "optional": false,
            "field": "InvalidAuthorization",
            "description": "<p>This operation is invalid at this stage.</p>"
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
    "url": "/reservation/admin/:id",
    "title": "Supervisor's operation to update a Reservation",
    "name": "Update_Reservation",
    "description": "<p>Update the info of a Reservation.</p>",
    "group": "Reservation_admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>New E2C_Translator id.</p>"
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
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to verify authorization.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trans_status",
            "description": "<p>New translating status.</p>"
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
    "type": "PUT",
    "url": "/translator/reservation/:id",
    "title": "Translator's operation to update a Reservation",
    "name": "Update_Reservation",
    "description": "<p>Update the informaiton of a Reservation.</p>",
    "group": "Reservation_translate",
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
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to verify authorization.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trans_status",
            "description": "<p>New translating status.</p>"
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
    "groupTitle": "Reservation_translate"
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
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Mandatory address.</p>"
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
            "field": "name",
            "description": "<p>Mandatory name.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>Mandatory user type.</p>"
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "POST",
    "url": "/supervisor/register/translator",
    "title": "SUpervisor's operation to create Translator",
    "name": "CreateTranslator",
    "description": "<p>Create a translator type of user.</p>",
    "group": "Supervisor",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "email",
            "description": "<p>Mandatory email address.</p>"
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "DELETE",
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "GET",
    "url": "/supervisor/user/:role/:query",
    "title": "Request list of User",
    "name": "ListCustomers",
    "description": "<p>Request a list of customers based on query.</p>",
    "group": "Supervisor",
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "GET",
    "url": "/supervisor/reservations/:query",
    "title": "Request list of Reservations",
    "name": "ListReservation",
    "description": "<p>Request a list of reservation based on query.</p>",
    "group": "Supervisor",
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
            "type": "Object[]",
            "optional": false,
            "field": "reservations",
            "description": "<p>List of filtered/sorted reservations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>Total pages.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "GET",
    "url": "/supervisor/reservation/documents/:id/:type",
    "title": "Request Documents associated with a Reservation",
    "name": "ReservationDocuments",
    "description": "<p>Request the documents associated with a reservation.</p>",
    "group": "Supervisor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Document type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Reservation unique ID.</p>"
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
            "type": "ErrorType",
            "optional": false,
            "field": "ReservationNotFound",
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "GET",
    "url": "/supervisor/reservation/:id",
    "title": "Request info of a Reservation",
    "name": "ReservationInfo",
    "description": "<p>Request the inf of a Reservation.</p>",
    "group": "Supervisor",
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
            "type": "DateTime",
            "optional": false,
            "field": "reservation.deadline",
            "description": "<p>Reservation deadline to upload to hospital.</p>"
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
            "type": "DateTime",
            "optional": false,
            "field": "reservation.last_upload",
            "description": "<p>Last upload DateTime of documents associated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.name",
            "description": "<p>Reservation_patient name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "reservation.re_assigned",
            "description": "<p>Whether reservation has been reassigned.</p>"
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
            "type": "DateTime",
            "optional": false,
            "field": "reservation.trans_deadline",
            "description": "<p>Reservation translating deadline.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.trans_status",
            "description": "<p>Reservation translating status.</p>"
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
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "POST",
    "url": "/supervisor/questionnaire_link",
    "title": "Send qestionnaire link via email",
    "name": "SendResetLink",
    "description": "<p>Send reset link to users.</p>",
    "group": "Supervisor",
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
            "type": "ErrorType",
            "optional": false,
            "field": "RequiredFieldBlank",
            "description": "<p>Any mandatory form is blank.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "POST",
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "GET",
    "url": "/summary",
    "title": "Summarize Website Stats",
    "name": "SupervisorSummary",
    "description": "<p>Request a summary of the website's stats.</p>",
    "group": "Supervisor",
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "PUT",
    "url": "/supervisor/user/",
    "title": "Update User Info",
    "name": "UpdateUser",
    "description": "<p>Update user info.</p>",
    "group": "Supervisor",
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
            "type": "Number",
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "GET",
    "url": "/supervisor/user/",
    "title": "Request User Info",
    "name": "UserInfo",
    "description": "<p>Request user info.</p>",
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
            "field": "user.address",
            "description": "<p>Mandatory User address.</p>"
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
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "POST",
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
            "type": "Number",
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
            "field": "SupervisorNotFound",
            "description": "<p>The requested <code>id</code> of supervisor is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/supervisor.py",
    "groupTitle": "Supervisor"
  },
  {
    "type": "GET",
    "url": "/translator/reservations/:query",
    "title": "Request list of Reservations",
    "name": "ListReservation",
    "description": "<p>Request a list of reservation based on query.</p>",
    "group": "Translator",
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
            "type": "Object[]",
            "optional": false,
            "field": "reservations",
            "description": "<p>List of filterd/sorted reservations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>Total pages.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "GET",
    "url": "/translator/reservation/:id",
    "title": "Request info of a Reservation",
    "name": "ReservationInfo",
    "description": "<p>Request the informaiton of a Reservation.</p>",
    "group": "Translator",
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Reservation_patient name.</p>"
          },
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
            "type": "DateTime",
            "optional": false,
            "field": "reservation.last_upload",
            "description": "<p>Last upload DateTime of documents associated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservation.name",
            "description": "<p>Hospital name.</p>"
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
            "field": "trans_status",
            "description": "<p>Reservation translating status.</p>"
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
            "description": "<p>The required <code>id</code> of reservation is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "POST",
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
    "filename": "build/translator.py",
    "groupTitle": "Translator"
  },
  {
    "type": "POST",
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
            "type": "ErrorType",
            "optional": false,
            "field": "TranslatorNotFound",
            "description": "<p>The requested <code>id</code> of translator is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "build/translator.py",
    "groupTitle": "Translator"
  }
] });
