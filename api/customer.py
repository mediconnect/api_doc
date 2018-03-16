"""
@api {post} /customer/login/ customer Login
@apiName CustomerLogin
@apiDescription Handle customer login request.
@apiGroup customer

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.

@apiVersion 0.0.0
"""

"""
@api {get} /customer/info Request customer Info
@apiName CustomerInfo
@apiDescription Request customer infomation.
@apiGroup customer

@apiParam {Number} id Mandatory unique customer ID.

@apiSuccess {Object} customer customer Object.
@apiSuccess {String} customer.first_name Mandatory customer first name.
@apiSuccess {String} customer.last_name Mandatory customer last name.
@apiSuccess {Number} customer.age Optional customer age.
@apiSuccess {String} customer.address Mandatory customer address.
@apiSuccess {String} customer.email Mandatory customer email.
@apiSuccess {String} customer.phone Mandatory customer phone.
@apiSuccess {String} [customer.wechat] Optional customer wechat.
@apiSuccess {String} [customer.qq] Optional customer qq.
@apiSuccess {String} [customer.gender] Optional customer gender.

@apiError customerNotFound The <code>id</code> of the customer was not found.

@apiVersion 0.0.0
"""

"""
@api {get} /customer/get_stored_patient_ids Request Stored Patiente_IDs
@apiName GetStoredPatientIds
@apiDescription Request a list of stored patient_ids.
@apiGroup customer

@apiParam {Number}	id Mandatory unique customer ID.

@apiSuccess {Number[]}	patient_ids 	Mandatory Patient IDs.
@apiSuccess	{String[]}	patient_names	Mandatory Patient Names.

@apiError customerNotFound	The <code>id</code> of the customer was not found.	
@apiVersion 0.0.0


@api {post} /customer/register/ customer Register
@apiName CustomerRegister
@apiDescription Handle customer registration request.
@apiGroup customer

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.
@apiParam {String} password_confirmation Mandatory confirmation password.
@apiParam {String} name Mandatory name.
@apiParam {String} address Mandatory address.
@apiParam {Number} tel Mandatory phone number.

@apiSuccess {Number} id Registered customer id.

@apiError EmailAlreadyExists The email exists in the DB.
@apiError PasswordDoesNotMath The password does not match password_confirmation.
@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""
