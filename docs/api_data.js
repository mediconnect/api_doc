define({ "api": [
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
    "url": "/reserve/:id/1",
    "title": "First step",
    "name": "ReservationFirstStep",
    "group": "Reservation",
    "description": "<p>First step of reservation, fill in customer/patient info, associate reservation_patient id</p>",
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
            "optional": false,
            "field": "reservation_patient_id",
            "description": "<p>Mandatory Unique ID for patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "current_date_time",
            "description": "<p>Mandatory Datetime of first step completed.</p>"
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
    "type": "post",
    "url": "/reserve/:id/2",
    "title": "Second step",
    "name": "ReservationSecondStep",
    "group": "Reservation",
    "description": "<p>Second step of reservation, fill in hospital/disease/document info, associate dcument_id</p>",
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
            "type": "DateTime",
            "optional": false,
            "field": "reservation_slot",
            "description": "<p>Mandatory slot for Reservation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diagnosed_hospital",
            "description": "<p>Mandatory diagnose-hospital.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diagnosed_doctor",
            "description": "<p>Mandatory diagnose-doctor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diagnosed_doctor_contact",
            "description": "<p>Mandatory diagnose-doctor contact info.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "documents",
            "description": "<p>Mandatory list of documents uploaded.</p>"
          },
          {
            "group": "Parameter",
            "type": "Stinrg",
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
            "optional": false,
            "field": "document.note",
            "description": "<p>Mandatory note for document</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory Datetime of first step completed.</p>"
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
    "type": "get",
    "url": "/user/info",
    "title": "Request User Info",
    "name": "UserInfo",
    "description": "<p>Request user infomation.</p>",
    "group": "User",
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
            "optional": false,
            "field": "user.wechat",
            "description": "<p>Optional User wechat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.qq",
            "description": "<p>Optional User qq.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.gender",
            "description": "<p>Optional User gender.</p> <blockquote> <blockquote> <blockquote> <blockquote> <blockquote> <blockquote> <blockquote> <p>fcfb94715fbd7a0012666285f6770c6794ff998b</p> </blockquote> </blockquote> </blockquote> </blockquote> </blockquote> </blockquote> </blockquote>"
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
    "filename": "api/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login/",
    "title": "User Login",
    "name": "UserLogin",
    "description": "<p>Handle user login request.</p>",
    "group": "User",
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
    "filename": "api/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register/",
    "title": "User Register",
    "name": "UserRegister",
    "description": "<p>Handle user registration request.</p>",
    "group": "User",
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
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Registered user id.</p>"
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
    "filename": "api/user.py",
    "groupTitle": "User"
  }
] });
