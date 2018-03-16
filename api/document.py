"""
@api {post} /document Create Document
@apiName CreateDocument
@apiGroup Document
@apiDescription Create document.

@apiParam {String}		document.description 			Mandatory document description
@apiParam {String}		document.file_path				Mandatory file_path
@apiParam {String}		document.name 					Mandatory document name
@apiParam {String} 		[document.note]					Optional note for document.	
@apiParam {DateTime}	document.upload_at				Mandatory document upload time.		

@apiSuccess {Number}	document.id

@apiError RequiredFieldBlank Any mandatory form is blank.

"""

"""
@api {get} /document Request Document Info
@apiName RequestDocument
@apiGroup Document
@apiDescription Request document information.

@apiString {Number} 	document.id		Mandatory unique document ID.

@apiSuccess {Object}		document 						Document Object
@apiSuccess {Stinrg}		document.description 			Document description
@apiSuccess {String}		document.file_path				File_path
@apiSuccess {String}		document.name 					Document name
@apiSuccess {String} 		[document.note]					Note for document
@apiSuccess {DateTime}		document.upload_at				Document upload time.

@apiError DocumentNotFound	The <code>id</code> of the document doesn't exist. 
"""
