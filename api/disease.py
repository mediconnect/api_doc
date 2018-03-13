"""
@api {get} /disease/:id Request Disease Information
@apiName DiseaseDisplay
@apiGroup Disease
@apiDescription Display information about a disease.

@apiParam {Number} id 			Disease unique ID

@apiSuccess {String} name 		Disease name
@apiSuccess	{String} keyword	Disease keyword
@apiSuccess	{String} image		Disease image		

@apiError DiseaseNotFound The <code>id</code> of the Disease was not found.
"""