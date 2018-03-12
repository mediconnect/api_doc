"""
@api {get} /hospital/:id Request Hospital Information
@apiName Hospital-Display
@apiGroup Hospital
@apiDescription Display information about a hospital.

@apiParam {Number} id 					Hospital unique ID

@apiSuccess {String} name 				Hospital Name.
@apiSuccess {Object} hospital 			Hospital Object.
@apiSuccess {Number} hospital.rank 		Hospital General Rank.
@apiSuccess {String} hospital.location 	Hospital Location.
@apiSuccess {String} hospital.image 	Hospital Image.
@apiSuccess {String} hospital.intro 	Hospital Brief Introduction.
@apiSuccess	{String} hospital.url 		Hospital Website Link.

@apiError ObjectNotFound The <code>id</code> of the Hospital was not found.
"""
"""

@api {get} /hospitals/:query Request List of Hospitals
@apiName Hospital-List
@apiGroup Hospital
@apiDescription Dispaly all hospitals based on query

@apiParam {Srtring} query 				Query to filter/sort Hospitals

@apiSuccess {Object[]} 	hospitals 		List of filtered/sorted Hospitals.
@apiSuccess {Number}	page			pagination
@apiSuccess {String} name 				Hospital Name.
@apiSuccess {Number} hospital.rank 		Hospital General Rank.
@apiSuccess {String} hospital.location 	Hospital Location.
@apiSuccess {String} hospital.image 	Hospital Image.
@apiSuccess {String} hospital.intro 	Hospital Brief Introduction.
@apiSuccess	{String} hospital.url 		Hospital Website Link.

@apiVersion 0.0.0
"""