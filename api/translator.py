"""
@api {post} /translator/login/ Translator Login
@apiName TranslatorLogin
@apiDescription Handle translator login request.
@apiGroup Translator

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.

@apiVersion 0.0.0
"""


"""
@api {post} /translator/register Create Translator
@apiName CreateTranslator
@apiDescription Create a translator type of user.
@apiGroup Translator

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.
@apiParam {String} password_confirmation Mandatory confirmation password.
@apiParam {String} name Mandatory name.
@apiParam {String} address Mandatory address.
@apiParam {Number} tel Mandatory phone number.

@apiSuccess {Number} id Registered translator id.

@apiError EmailAlreadyExists The email exists in the DB.
@apiError PasswordDoesNotMath The password does not match password_confirmation.
@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""

"""
@api {post} /translator/password Validate password
@apiName ValidatePassword
@apiDescription Validate translaotr's password input to authorize operations.
@apiGroup Translator

@apiParam {Number} id 				Unique Translator ID
@apiParam {String} password 		Mandatory password
@apiParam {Number} [status_code] 	Optional status code for stage control

@apiSuccess {String} token 			Token generated for authorization

@apiError TranslatorNotFound 	The requested <code>id</code> of translator is not found. 

@apiVersion 0.0.0
"""


"""
@api {get} /translator/reservations/:query Request list of Reservations
@apiName ListReservation
@apiGroup Translator
@apiDescription Request a list of reservation based on query.

@apiParam {String} query	Query to filter/sort the reservations.

@apiSuccess {Number}	page					Pagination.
@apiSuccess {Number}	total_page				Total pages.
@apiSuccess {Object[]} 	reservations 			List of filterd/sorted reservations.


@apiVersion 0.0.0
"""


"""
@api {get} /translator/reservation/:id Request info of a Reservation
@apiName ReservationInfo
@apiGroup Translator
@apiDescription Request the informaiton of a Reservation.

@apiParam {Number} id 	Unique ID of a Reservation.

@apiSuccess {Object}	reservation 			Reservation Object.
@apiSuccess {Number} 	reservation.id			Reservation unique id.
@apiSuccess	{String}	reservation.customer.name	Customer name.
@apiSuccess {String} 	reservaiton.reservation_patient.name Reservation_patient name.
@apiSuccess {String}	reservation.disease.name 	Disease name.
@apiSuccess {String}	reservation.hospital.name 	Hospital name.
@apiSuccess {String} 	[reservation.translator_C2E_name] C2E_Translator name.
@apiSuccess {String} 	[reservation.translator_E2C_name] E2C_Translaotr name.
@apiSuccess {String} 	reservaiton.trans_status 	Reservation translating status.
@apiSuccess {DateTime}	reservation.trans_deadline 	Reservation translating deadline. 
@apiSuccess {DateTime} 	reservation.last_upload 	Last upload DateTime of documents associated.

@apiError ReservationNotFound The required <code>id</code> of reservation is not found.

@apiVersion 0.0.0
"""

"""
@api {put} /translator/reservation/:id Update a Reservation
@apiName Update Reservation
@apiGroup Translator
@apiDescription Update the informaiton of a Reservation.

@apiParam {Number} 	id 							Unique ID of a Reservation.
@apiParam {Number}	status						New reservation status.
@apiParam {Number} 	trans_status 				New translating status.
@apiParam {String} 	token 						Token to verify authorization.

@apiError ReservationNotFound 		The required <code>id</code> of reservation is not found.
@apiError InvalidAuthorization 			The operation is invalid at this stage. 

@apiVersion 0.0.0
"""

"""
@api {get} /translator/questionnaire/:id Request Questionnaire
@apiName RequestQuestionnaire
@apiDescription Request questionnaire information.
@apiGroup Questionnaire

@apiParam {Number} id 		Unique Questionnaire ID.

@apiSuccess {Object} document Questionnaire Document.

@apiError QuestionnaireNotFound 	The requested <code>id</code> of questionnaire is not found.

@apiVersion 0.0.0
"""

"""
@api {put} /translator/questionnaire/:id Update Questionnaire
@apiName UpdateQuestionnaire
@apiDescription Update questionnaire with translated document.
@apiGroup Questionnaire

@apiParam {Number} id 		Unique Questionnaire ID.
@apiParam {Object} document Mandatory Questionnaire Document.
@apiParam {String} token 	Mandatory token for authorization.

@apiError QuestionnaireNotFound 	The requested <code>id</code> of questionnaire is not found.

@apiVersion 0.0.0
"""
