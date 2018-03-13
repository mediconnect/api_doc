"""
@api {post} /reserve/:id/1 First step
@apiName ReservationFirstStep
@apiGroup Reservation
@apiDescription First step of reservation, fill in customer/patient info, associate reservation_patient id

@apiParam {Number} 		reservation_id 					Mandatory Reservation unique ID.
@apiParam {Number} 		reservation_patient_id 			Mandatory Unique ID for patient.
@apiParam {DateTime} 	current_date_time				Mandatory Datetime of first step completed.	

@apiError ReservationExpired 			The slots reserved expired after 30 min.

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
@apiParam {Object[]}	documents						Mandatory list of documents uploaded.
@apiParam {Stinrg}		document.description 			Mandatory document description
@apiParam {String}		document.file_path				Mandatory file_path
@apiParam {String}		document.name 					Mandatory document name
@apiParam {String} 		document.note					Mandatory note for document			
@apiParam {DateTime} 	date_time						Mandatory Datetime of first step completed.	

@apiError ReservationExpired 			The slots reserved expired after 30 min.

@apiVersion 0.0.0
"""
