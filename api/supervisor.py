"""
@api {post} /supervisor/login/ Supervisor Login
@apiName SupervisorLogin
@apiDescription Handle supervisor login request.
@apiGroup Supervisor

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.

@apiVersion 0.0.0
"""
"""
@api {post} /supervisor/register Create Supervisor
@apiName CreateSupervisor
@apiDescription Create a supervisor type of user.
@apiGroup Supervisor

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.
@apiParam {String} password_confirmation Mandatory confirmation password.
@apiParam {String} name Mandatory name.
@apiParam {String} address Mandatory address.
@apiParam {Number} tel Mandatory phone number.

@apiSuccess {Number} id Registered supervisor id.

@apiError EmailAlreadyExists The email exists in the DB.
@apiError PasswordDoesNotMath The password does not match password_confirmation.
@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""

"""
@api {get} /summary Summarize Website Stats
@apiName SupervisorSummary
@apiGroup Supervisor
@apiDescription Request a summary of the website's stats.

@apiSuccess {String} summary 	Whatever summary we want to display for the supervisor.

@apiVersion 0.0.0
"""

"""
@api {get} /supervisor/reservations/:query Request list of Reservations
@apiName ListReservation
@apiGroup Supervisor
@apiDescription Request a list of reservation based on query.

@apiParam {String} query	Query to filter/sort the reservations.

@apiSuccess {Number}	page					Pagination.
@apiSuccess {Number}	total_page				Total pages.
@apiSuccess {Object[]} 	reservations 			List of filterd/sorted reservations.


@apiVersion 0.0.0
"""


"""
@api {get} /supervisor/reservation/:id Request info of a Reservation
@apiName ReservationInfo
@apiGroup Supervisor
@apiDescription Request the informaiton of a Reservation.

@apiParam {Number} id 	Unique ID of a Reservation.

@apiSuccess {Object}	reservation 			Reservation Object.
@apiSuccess {Number} 	reservation.id			Reservation unique id.
@apiSuccess	{String}	reservation.customer.name	Customer name.
@apiSuccess {String} 	reservaiton.reservation_patient.name Reservation_patient name.
@apiSuccess {String}	reservation.disease.name 	Disease name.
@apiSuccess {String}	reservation.hospital.name 	Hospital name.
@apiSuccess {String} 	reservation.translator_C2E_name C2E_Translator name.
@apiSuccess {String} 	reservation.translator_E2C_name E2C_Translaotr name.
@apiSuccess {String}	reservation.status		Reservation status.
@apiSuccess {String} 	reservaiton.trans_status 	Reservation translating status.
@apiSuccess {DateTime}	reservation.deadline 	Reservation deadline to upload to hospital.
@apiSuccess {DateTime}	reservation.trans_deadline 	Reservation translating deadline. 
@apiSuccess {DateTime} 	reservation.last_upload 	Last upload DateTime of documents associated.
@apiSuccess {Boolean} 	reservation.re_assigned 	Whether reservation has been reassigned.

@apiError ReservationNotFound The required <code>id</code> of reservation is not found.

@apiVersion 0.0.0
"""

"""
@api {put} /supervisor/reservation/:id Update a Reservation
@apiName Update Reservation
@apiGroup Supervisor
@apiDescription Update the informaiton of a Reservation.

@apiParam {Number} 	id 							Unique ID of a Reservation.
@apiParam {Number} 	translator_C2E.id 			New C2E_Translator id.
@apiParam {Number} 	translator_E2C.id 			New E2C_Translaotr id.
@apiParam {Number}	status						New reservation status.
@apiParam {Number} 	trans_status 				New translating status.
@apiParam {String} 	token 						Token to verify authorization.

@apiError ReservationNotFound 		The required <code>id</code> of reservation is not found.
@apiError InvalidAuthorization 			The operation is invalid at this stage. 

@apiVersion 0.0.0
"""

"""
@api {delete} /supervisor/reservation/:id Delete a Reservation
@apiName Delete Reservation
@apiGroup Supervisor
@apiDescription Remove a Reservation from Database.

@apiParam {Number} 	id 				Unique ID of a Reservation.
@apiParam {String} 	token 			Token to verify authorization.

@apiError InvalidAuthorization		This operation is invalid at this stage.
"""

"""
@api {get} /supervisor/reservation/documents/:id/:type Request Documents associated with a Reservation
@apiName ReservationDocuments
@apiGroup Supervisor
@apiDescription Request the documents associated with a reservation. 

@apiParam {Number} id 	Reservation unique ID.
@apiParam {String} type Document type

@apiSuccess {Object[]} documents 	List of Document Objects

@apiError ReservationNotFound The required <code>id</code> of reservation is not found.

@apiVersion 0.0.0
"""

"""
@api {get} /supervisor/questionnaire/:hospital_id/:disease_id/:category Request Questionnaire
@apiName RequestQuestionnaire
@apiDescription Request questionnaire information.
@apiGroup Questionnaire

@apiParam {Number} hospital_id 	Mandatory Hospital ID.
@apiParam {Number} disease_id 	Mandatory Disease ID.
@apiParam {String} category 	Mandatory questionnaire category.

@apiSuccess {String[]} formats 	Question formats.
@apiSuccess {String[]} contents Quesiton contents.
@apiSuccess {String[]} choices 	Quesiton choices. 
@apiSuccess {Number}   translaotr_E2C.id The id of translator assigned.
@apiSuccess {Boolean}	translated 	Whther the questionnaire has been translated.

@apiSuccessExample {json} Success-response:
	HTTP/1.1/ 200 OK
	{
		"formats":[	"Multiple Choice",
					"Short Answer",
					"Multiple Choice",
					],
		"contents":["Who is your daddy?",
					"Who is your second daddy?",
					"Who is your mom?",
					]
		"choices":[	"A$Alen|B$Bob|C$Charles",
					"",
					"A$Alex|B$Bruce|C$Champ",
					]
	} 

@apiError QuestionnaireNotFound 	The requested <code>id</code> of questionnaire is not found.

@apiVersion 0.0.0
"""

"""
@api {post} /supervisor/questionnaire/:hospital_id/:disease_id/:category Create Questionnaire
@apiName CreateQuestionnaire
@apiDescription Create a Questionnaire.
@apiGroup Questionnaire

@apiParam {Number} hospital_id 	Mandatory Hospital ID.
@apiParam {Number} disease_id 	Mandatory Disease ID.
@apiParam {String} category 	Mandatory questionnaire category.
@apiParam {String[]} formats 	Mandatory question formats.
@apiParam {String[]} contents 	Mandatory quesiton contents.
@apiParam {String[]} choices 	Mandatory quesiton choices. 
@apiParam {Number} translator_C2E.id 	Mandatory translator assigned ID.

@apiSuccess {Number} questionnaire_id 	Questionnaire ID.

@apiError RequiredFieldBlank Any mandatory form is blank.
@apiError TranslatorNotFound 		The requested <code>id</code> of translator is not found.

@apiVersion 0.0.0

"""
"""
@api {put} /supervisor/questionnaire/:hospital_id/:disease_id/:category Update Questionnaire
@apiName UpdateQuestionnaire
@apiDescription Update a Questionnaire.
@apiGroup Questionnaire

@apiParam {Number} hospital_id 	Mandatory Hospital ID.
@apiParam {Number} disease_id 	Mandatory Disease ID.
@apiParam {String} category 	Mandatory questionnaire category.
@apiParam {String[]} [formats] 	Optional question formats.
@apiParam {String[]} [contents] Optional quesiton contents.
@apiParam {String[]} [choices] 	Optional quesiton choices. 
@apiParam {Numebr} 	 [translator_C2E.id] Optional translator assigned ID.

@apiSuccess {Number} questionnaire_id 	Questionnaire ID.

@apiError QuestionnaireNotFound 	The requested <code>id</code> of questionnaire is not found.
@apiError TranslatorNotFound 		The requested <code>id</code> of translator is not found.

@apiVersion 0.0.0
"""
