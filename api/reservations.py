"""
@api {post} /reserve/:id/1 First step
@apiName ReservationFirstStep
@apiGroup Reservation
@apiDescription First step of reservation, fill in customer/patient info, associate reservation_patient id

@apiParam {Number} 		reservation_id 					Mandatory Reservation unique ID.
@apiParam {Number} 		reservation_patient_id 			Mandatory Unique ID for patient.
@apiParam {DateTime} 	date_time						Mandatory Datetime of first step completed.	

@apiError ReservationExpired 			The slots reserved expired after 30 min.

@apiVersion 0.0.0
"""
