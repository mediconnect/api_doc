"""
@api {post} /reserve/:id/1 First step
@apiName ReservationFirstStep
@apiGroup Reservation
@apiDescription First step of reservation, fill in customer/patient info, associate reservation_patient id

@apiParam {Number} 		reservation_id 					Mandatory Reservation unique ID.
@apiParam {Number} 		reservation_patient_id 			Mandatory Unique ID for patient.
@apiParam {DateTime} 	current_date_time				Mandatory Datetime of first step completed.	

@apiError ReservationExpired 			The slots reserved expired after 30 min.
@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""

"""
@api {post} /reserve/:id/2 Second step
@apiName ReservationSecondStep
@apiGroup Reservation
@apiDescription Second step of reservation, fill in hospital/disease/document info, associate dcument_id

@apiParam {Number} 		reservation_id 					Mandatory Reservation unique ID.
@apiParam {DateTime}	reservation_slot				Mandatory slot for Reservation.
@apiParam {String}		diagnosed_hospital				Mandatory diagnose-hospital.
@apiParam {String}		diagnosed_doctor				Mandatory diagnose-doctor.
@apiParam {String}		diagnosed_doctor_contact		Mandatory diagnose-doctor contact info.
@apiParam {String[]}	required_documents_types 		Mandatory require-documents ytpes.
@apiParam {Object[]}	documents_ids					Mandatory document IDs. 
@apiParam {DateTime} 	date_time						Mandatory Datetime of second step completed.

@apiError ReservationExpired 			The slots reserved expired after 30 min.
@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""

"""
@api {get} /reserve/:id/ Request reservation info
@apiName	RequestReservationInfo
@apiGroup 	Reservation
@apiDescription Request reservation information.

@apiSuccess {Object}		reservation 					Reservation Object
@apiSuccess {String}		diagnosed_hospital				Diagnose-hospital name.
@apiSuccess {String}		diagnosed_doctor				Diagnose-doctor name.
@apiSuccess {String}		diagnosed_doctor_contact		Diagnose-doctor contact info.	
@apiSuccess {Number} 		reservation_patient_id 			Unique ID for patient.
@apiSuccess {Number}		slot_number						Slot number at submit.
@apiSuccess {Number[]}		documents_ids					Associated Document IDs.
@apiSuccess {String}		note							Note for the reservation.

@apiError ReservationNotFound	The <code>id</code> of the required reservation doesn't exist.

@apiVersion 0.0.0
"""

"""
@api {post} /reserve/:id Commit reservation to the database.
@apiName PostReservation
@apiGroup Reservation
@apiDescription Store the created reservation in the database.

@apiParam {Boolean}	 confirm 	Confirmation that the reservation should be saved in the database.
@apiParam {DateTime} date_time	Mandatory Datetime of commit to be made.


@apiSuccess {Number} id 		Unique ID of reservation.

@apiError ReservationExpired 	The slots reserved expired after 30 min.	

@apiVersion 0.0.0
"""

