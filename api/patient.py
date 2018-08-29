"""
@api {post} /patient/create Create patient
@apiName CreatePatient
@apiGroup Patient

@apiParam {Number}   user_id			Mandatory unique User ID.
@apiParam {String}   first_name 		Mandatory first name.
@apiParam {String}   last_name			Mandatory last name.
@apiParam {String}   first_name_pinyin	Mandatory first name pinyin.
@apiParam {String}   last_name_pinyin	Mandatory last name pinyin.
@apiParam {String}   gender				Mandatory gender with default "M".
@apiParam {DateTime} birthdate			Mandatory birthdate.
@apiParam {String}   relationship		Mandatory replationship with user.
@apiParam {String}	 passport_number 	Mandatory passport number.
@apiParam {String}	 [note]				Optional note.

@apiSuccess {String} patient_id			On Successful creation, return patient_id. 

@apiVersion 0.0.0
"""

"""
@api {post} /patient/:patient_id/update Update patient
@apiName UpdatePatient
@apiGroup Patient

@apiParam {Number}	 patient_id				Mandatory unique Patient ID.
@apiParam {String}   [first_name]	 		Mandatory first name.
@apiParam {String}   [last_name]			Mandatory last name.
@apiParam {String}   [first_name_pinyin]	Mandatory first name pinyin.
@apiParam {String}   [last_name_pinyin]		Mandatory last name pinyin.
@apiParam {String}   [gender]				Mandatory gender with default "M".
@apiParam {DateTime} [birthdate]			Mandatory birthdate.
@apiParam {String}   [relationship]			Mandatory replationship with user.
@apiParam {String}	 [passport_number] 		Mandatory passport number.
@apiParam {String}	 [note]					Optional note.

@apiSuccess {String} msg		Successfully update patient. 

@apiVersion 0.0.0
"""

"""
@api {post} /patient/:patient_id/visit_history/add	Create patient previous hospital visit history
@apiName UpdatePatientHistory
@apiGroup Patient

@apiParam {Number}	 patient_id				Mandatory unique Patient ID.
@apiParam {String}   hospital_name	 		Mandatory hospital visited.
@apiParam {String}   doctor_name			Mandatory doctor consulted.
@apiParam {String}   contact_info			Mandatory doctor contact info.
@apiParam {String}   disease_category		Mandatory main disease category for the visit.
@apiParam {DateTime} [visit_date]			Optional visit date.

@apiSuccess {String} visit_id		On success, return visit history id.

@apiVersion 0.0.0
"""

"""
@api {get} /patient/:id/info Request patient info
@apiName PatientInfo
@apiGroup Patient

@apiParam {Number}   id		Mandatory unique Patient ID.

@apiSuccess {String}    first_name 			Mandatory first name.
@apiSuccess {String}    last_name			Mandatory last name.
@apiSuccess {String}    first_name_pinyin	Mandatory first name pinyin.
@apiSuccess {String}    last_name_pinyin	Mandatory last name pinyin.
@apiSuccess {String}    gender				Mandatory gender with default "M".
@apiSuccess {DateTime}  birthdate			Mandatory birthdate.
@apiSuccess {String}    relationship		Mandatory replationship with user.
@apiSuccess {String}	passport_number 	Mandatory passport number.
@apiSuccess {String}	note				Optional note.

@apiError	PatientNotFound	The <code>id</code> of patient is not found.

@apiVersion 0.0.0
"""