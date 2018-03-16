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