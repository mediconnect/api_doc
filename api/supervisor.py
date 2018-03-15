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
@api {get} /reservations/:query Request list of Reservations
@apiName ListReservation
@apiGroup Supervisor
@apiDescription Request a list of reservation based on query.

@apiParam {String} query	Query to filter/sort the reservations.

@apiSuccess {Number}	page					Pagination.
@apiSuccess {Number}	total_page				Total pages.
@apiSuccess {Object[]} 	reservations 			List of filterd/sorted reservations.
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
@apiSuccess {String}	reservation.url 		Link to reservation detail. 
@apiSuccess {Boolean} 	reservation.re_assigned 	Whether reservation has been reassigned.

@apiError ReservationNotFound The required reservations based on <code>query</code> are not found. 

@apiVersion 0.0.0
"""