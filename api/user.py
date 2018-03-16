"""
@api {post} /user/login/ User Login
@apiName UserLogin
@apiDescription Handle user login request.
@apiGroup User

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.

@apiVersion 0.0.0
"""

"""
@api {get} /user/info Request User Info
@apiName UserInfo
@apiDescription Request user infomation.
@apiGroup User

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
@api {get} /user/get_stored_patient_ids Request Stored Patiente_IDs
@apiName GetStoredPatientIds
@apiDescription Request a list of stored patient_ids.
@apiGroup User

@apiParam {Number}	id Mandatory unique User ID.

@apiSuccess {Number[]}	patient_ids 	Mandatory Patient IDs.
@apiSuccess	{String[]}	patient_names	Mandatory Patient Names.

@apiError UserNotFound	The <code>id</code> of the user was not found.	
@apiVersion 0.0.0


@api {post} /user/register/ User Register
@apiName UserRegister
@apiDescription Handle user registration request.
@apiGroup User

@apiParam {String} email Mandatory email address.
@apiParam {String} password Mandatory password.
@apiParam {String} password_confirmation Mandatory confirmation password.
@apiParam {String} name Mandatory name.
@apiParam {String} address Mandatory address.
@apiParam {Number} tel Mandatory phone number.

@apiSuccess {Number} id Registered user id.

@apiError EmailAlreadyExists The email exists in the DB.
@apiError PasswordDoesNotMath The password does not match password_confirmation.
@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""
