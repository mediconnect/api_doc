"""
@api {post} /customer/login/ Customer Login
@apiName CustomerLogin
@apiDescription Handle customer login request.
@apiGroup Customer

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.

@apiVersion 0.0.0
"""

"""
@api {get} /customer/info Request Customer Info
@apiName CustomerInfo
@apiDescription Request customer infomation.
@apiGroup Customer

@apiParam {Number} id Mandatory unique Customer ID.

@apiSuccess {Object} customer Customer Object.
@apiSuccess {String} customer.first_name Mandatory Customer first name.
@apiSuccess {String} customer.last_name Mandatory Customer last name.
@apiSuccess {Number} customer.age Optional Customer age.
@apiSuccess {String} customer.address Mandatory Customer address.
@apiSuccess {String} customer.email Mandatory Customer email.
@apiSuccess {String} customer.phone Mandatory Customer phone.
@apiSuccess {String} [customer.wechat] Optional Customer wechat.
@apiSuccess {String} [customer.qq] Optional Customer qq.
@apiSuccess {String} [customer.gender] Optional Customer gender.

@apiError CustomerNotFound The <code>id</code> of the customer was not found.

@apiVersion 0.0.0
"""

"""
@api {get} /customer/get_stored_patient_ids Request Stored Patiente_IDs
@apiName GetStoredPatientIds
@apiDescription Request a list of stored patient_ids.
@apiGroup Customer

@apiParam {Number}	id Mandatory unique Customer ID.

@apiSuccess {Number[]}	patient_ids 	Mandatory Patient IDs.
@apiSuccess	{String[]}	patient_names	Mandatory Patient Names.

@apiError CustomerNotFound	The <code>id</code> of the customer was not found.
@apiVersion 0.0.0
"""

"""
@api {post} /customer/register/ Customer Register
@apiName CustomerRegister
@apiDescription Handle customer registration request.
@apiGroup Customer

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

"""
@api {post} /customer/forget_password Forget Password
@apiName CustomerForgetPassword
@apiDescription Handle request from customer that forgets password.
@apiGroup Customer

@apiParam {String} email Mandatory email address.
@apiParam {String} captcha Validation code for identifying robot.

@apiError CaptchaDoesNotMatch The captcha does not match database entry.
@apiError EmailDoesNotExist The queried email does not exist in the database.

@apiVersion 0.0.0
"""

"""
@api {post} /customer/update_profile Update Customer Profile Information
@apiName CustomerUpdateProfile
@apiDescription Update customer profile information.
@apiGroup Customer

@apiParam {String} name Mandatory customer name.
@apiParam {String} email Mandatory email address.
@apiParam {String} address Mandatory address.
@apiParam {Number} tel Mandatory phone number.
@apiParam {String} old_password Mandatory old password.
@apiParam {String} password Mandatory password.
@apiParam {String} password_confirmation Mandatory confirmation password.

@apiError EmailAlreadyExists The email address changes but also duplicate with another existing email address.
@apiError WrongPassword The old password does not match the existing password in the database.
@apiError PasswordDoesNotMath The password does not match password_confirmation.
@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""
