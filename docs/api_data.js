define({ "api": [
  {
    "type": "get",
    "url": "/hospital/",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "hospital_id",
            "description": ""
          }
        ]
      }
    },
    "name": "Hospital_Display",
    "description": "<p>Display information about a hospital.</p>",
    "group": "Hospital",
    "version": "0.0.0",
    "filename": "api/hospital.py",
    "groupTitle": "Hospital"
  },
  {
    "type": "post",
    "url": "/user/login/",
    "title": "",
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
    "name": "User_login",
    "description": "<p>Handle user login request.</p>",
    "group": "User",
    "version": "0.0.0",
    "filename": "api/user.py",
    "groupTitle": "User"
  }
] });