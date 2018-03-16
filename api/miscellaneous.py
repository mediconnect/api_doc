"""
@api {get} /contact Request contact info
@apiName ContactInfo
@apiGroup Miscellaneous
@apiDescription Display contact information of the website.

@apiSuccess {String} info 	Whatever information we want to show the customers.

@apiVersion 0.0.0
"""

"""
@api {post} /contact Send email
@apiName SendEmail
@apiGroup Miscellaneous
@apiDescription Send email to the company.

@apiParam {String} subject 			Mandatory subject of the email to be sent.
@apiParam {String} email_address	Mandatory email address.
@apiParam {String} content			Mandatory email content.

@apiSuccess {String} 	Email sent.

@apiError RequiredFieldBlank Any mandatory form is blank.

@apiVersion 0.0.0
"""

"""
@api {get} /questionnaire/:id/:token Request Questionnaire
@apiName RequestQuestionnaire
@apiDescription Request questionnaire information.
@apiGroup Miscellaneous

@apiParam {Number} id 	 Unique Questionnaire ID.
@apiParam {String} token Token for authorization. 

@apiSuccess {Object}   document Questionnaire Document.
@apiSuccess {String[]} formats 	Question formats.
@apiSuccess {String[]} contents Quesiton contents.
@apiSuccess {String[]} choices 	Quesiton choices. 

@apiSuccessExample {json} Success-response:
	HTTP/1.1/ 200 OK
	{
		"formats":[	"Multiple Choice",
					"Short Answer",
					"Multiple Choice",
					],
		"contents":["Who is your daddy?",
					"Who is your second daddy?",
					"Who is your mom?",
					]
		"choices":[	"A$Alen|B$Bob|C$Charles",
					"",
					"A$Alex|B$Bruce|C$Champ",
					]
	} 

@apiError QuestionnaireNotFound 	The requested <code>id</code> of questionnaire is not found.

@apiVersion 0.0.0
"""