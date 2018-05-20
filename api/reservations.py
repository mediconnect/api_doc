"""
@api {put} /reservation/create 		Create Reservation
@apiName ReservationInitiate
@apiGroup Reservation
@apiDescription Create Reservation instance, also record the creation time

@apiParam {UUID} 		user_id 					Mandatory customer ID.
@apiParam {UUID} 		patient_id 					Mandatory patient ID.
@apiParam {UUID} 		hospital_id					Mandatory hospital ID.
@apiParam {Number} 		disease_id 					Mandatory disease ID.
@apiParam {UUID} 		timeslot_id					Mandatory reservation slot ID.

@apiError ReservationExpired 			The slots reserved expired after 30 min.
@apiError RequiredFieldBlank 			Any mandatory form is blank.

@apiVersion 0.0.0
"""

"""
@api {post} /reservation/:id/update			Update Reservation Information
@apiName ReservationUpdate
@apiGroup Reservation
@apiDescription Update reservation info: fill in previous info

@apiParam {UUID} 		reservation_id 						Mandatory Reservation unique ID.
@apiParam {UUID} 		[timeslot_id] 						Optional reservation slot ID.
@apiParam {String}		[first_diagnosed_hospital]			Optional diagnose-hospital.
@apiParam {String}		[first_diagnosed_doctor]			Optional diagnose-doctor.
@apiParam {String}		[first_diagnosed_doctor_contact]	Optional diagnose-doctor contact info.
@apiParam {String}		[note]								Optional other notes.

@apiError ReservationExpired 			The slots reserved expired after 30 min.

@apiVersion 0.0.0
"""

"""
@api {get} /reservation/:id/info	Reservation info
@apiName	GetReservationInfo
@apiGroup 	Reservation
@apiDescription Request reservation information.

@apiSuccess {Object}		reservation 					Reservation Object
@apiSuccess {UUID}			reservation.res_id 							Reservation ID
@apiSuccess {UUID} 			reservation.user_id 						Unique ID for customer.
@apiSuccess {UUID} 			reservation.patient_id 						Unique ID for patient.
@apiSuccess {UUID} 			reservation.hospital_id 					Unique ID for hospital.
@apiSuccess {Number} 		reservation.disease_id 						Unique ID for disease.
@apiSuccess {UUID}			reservation.timeslot_id						ID for reservation slot.
@apiSuccess {DateTime}		reservation.ctime							Time of creation.
@apiSuccess {DateTime} 		reservation.commit_at 						Time of submission.
@apiSuccess {String}		reservation.first_hospital					Diagnose-hospital name.
@apiSuccess {String}		reservation.first_doctor_name				Diagnose-doctor name.
@apiSuccess {String}		reservation.first_doctor_contact			Diagnose-doctor contact info.	
@apiSuccess {String}		reservation.note							Note for the reservation.

@apiError ReservationNotFound	The <code>id</code> of the required reservation doesn't exist.

@apiVersion 0.0.0
"""

"""
@api {post} /reservation/:id/commit 	Submit reservation information
@apiName CommitReservation
@apiGroup Reservation
@apiDescription Store the created reservation in the database.

@apiError ReservationExpired 	The slots reserved expired after 30 min.	

@apiVersion 0.0.0
"""

"""
@api {post} /reserve/:id/pay 	Make payment
@apiName PayReservation
@apiGroup Reservation
@apiDescription Pay full payment or deposit for the reservation using third-part API

@apiParam {Number}  id 		Unique ID of reservation.
@apiParam {Boolean} type 	Full payment or deposite.
@apiParam {String}  token	Token generated by third-party API for payment processing.

@apiSuccess {Number} id 	Unique ID of Reservation.

@apiError PaymentFailed  	The payment is not able to be processed.

@apiVersion 0.0.0
"""


