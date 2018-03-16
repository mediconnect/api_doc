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
@api {post} /supervisor/password Validate password
@apiName ValidatePassword
@apiDescription Validate supervisor's password input to authorize operations.
@apiGroup Supervisor

@apiParam {Number} id 				Unique Supervisor ID
@apiParam {String} password 		Mandatory password
@apiParam {Number} [status_code] 	Optional status code for stage control

@apiSuccess {String} token 			Token generated for authorization

@apiError SupervisorNotFound 	The requested <code>id</code> of supervisor is not found. 

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
@api {get} /supervisor/user/:role/:query Request list of User
@apiName ListCustomers
@apiGroup Supervisor
@apiDescription Request a list of customers based on query.

@apiParam {String} query	Query to filter/sort the customers.
@apiParam {Number} role 	Type of users to list.

@apiSuccess {Number}	page					Pagination.
@apiSuccess {Number}	total_page				Total pages.
@apiSuccess {Object[]} 	users 					List of filterd/sorted users.


@apiVersion 0.0.0
"""

"""
@api {get} /supervisor/user/ Request User Info
@apiName UserInfo
@apiDescription Request user infomation.
@apiGroup Supervisor

@apiParam {Number} id Mandatory unique User ID.

@apiSuccess {Object} user User Object.
@apiSuccess {String} user.first_name Mandatory User first name.
@apiSuccess {String} user.last_name Mandatory User last name.
@apiSuccess {Number} user.age Optional User age.
@apiSuccess {String} user.address Mandatory User address.
@apiSuccess {String} user.email Mandatory User email.
@apiSuccess {String} user.phone Mandatory User phone.
@apiSuccess {String} [user.wechat] Optional User wechat.
@apiSuccess {String} [user.qq] Optional User qq.
@apiSuccess {String} [user.gender] Optional User gender.

@apiError UserNotFound The <code>id</code> of the user was not found.

@apiVersion 0.0.0
"""

"""
@api {post} /supervisor/create Create User
@apiName CreateSupervisor
@apiDescription Create a supervisor type of user.
@apiGroup Supervisor

@apiParam {Number} role  Mandatory user type.
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
@api {put} /supervisor/user/ Update User Info
@apiName UpdateUser
@apiDescription Update user infomation.
@apiGroup Supervisor

@apiParam {Number} id Mandatory unique User ID.
@apiParam {String} [user.first_name] Optional User first name.
@apiParam {String} [user.last_name] Optional User last name.
@apiParam {Number} [user.age Optional] Optional User age.
@apiParam {String} [user.address] Optional User address.
@apiParam {String} [user.email] Optional User email.
@apiParam {String} [user.phone] Optional User phone.
@apiParam {String} [user.wechat] Optional User wechat.
@apiParam {String} [user.qq] Optional User qq.
@apiParam {String} [user.gender] Optional User gender.

@apiParam {String} token 	Mandatory token for authorizing operation.

@apiError UserNotFound 		The <code>id</code> of the user was not found.
@apiError AuthorizationFailed The operation is not authorized.

@apiVersion 0.0.0
"""

"""
@api {delete} /supervisor/user/ Delete
@apiName Delete
@apiDescription Delete user.
@apiGroup Supervisor

@apiParam {Number} id Mandatory unique User ID.
@apiParam {String} token 	Mandatory token for authorizing operation.

@apiError UserNotFound 		The <code>id</code> of the user was not found.
@apiError AuthorizationFailed The operation is not authorized.

@apiVersion 0.0.0
"""


"""
@api {post} /supervisor/reset_link 	Send reset link via email
@apiName SendResetLink
@apiGroup Supervisor
@apiDescription Send reset link to users.

@apiParam {String} email_address	Mandatory to_email address.
@apiParam {Number} id 				Mandatory unique User id.
@apiParam {String} token			Mandatory hashed token for temporary reset link.

@apiError RequiredFieldBlank Any mandatory form is blank.

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

@apiSuccess {Object}   document Questionnaire Document.
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


"""
@api {post} /supervisor/questionnaire_link 	Send qestionnaire link via email
@apiName SendResetLink
@apiGroup Supervisor
@apiDescription Send reset link to users.

@apiParam {String} email_address	Mandatory to_email address.
@apiParam {Number} id 				Mandatory unique User id.
@apiParam {Number} reservation_id   Mandatory unique Reservation id.
@apiParam {String} token			Mandatory hashed token for temporary reset link.

@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""