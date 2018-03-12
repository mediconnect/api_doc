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
@api {get} /user/:id/info Request User Info
@apiName UserInfo
@apiDescription Request user infomation.
@apiGroup User

@apiParam {Number}	 id	 		Mandatory unique User ID.

@apiSuccess {Object} user 		User Object.
@apiSuccess	{String} user.first_name	Mandatory User first name.
@apiSuccess	{String} user.last_name		Mandatory User last name.
@apiSuccess	{Number} user.age			Optional User age.
@apiSuccess {String} user.address		Mandatory User address.
@apiSuccess {String} user.email 		Mandatory User email.
@apiSuccess {String} user.phone 		Mandatory User phone.
@apiSuccess	{String} user.wechat		Optional User wechat.
@apiSuccess {String} user.qq 			Optional User qq. 
@apiSuccess	{String} user.gender		Optional User gender.

@apiError UserNotFound The <code>id</code> of the user was not found.

@apiVersion 0.0.0
"""