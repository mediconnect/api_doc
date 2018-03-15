"""
@api {get} /requirement/:hospital_id/:disease_id Request Document Requirement
@apiName DocumentRequirement
@apiGroup Requirement
@apiDescription Display document requirement.

@apiParam {Number} hospital_id			Hospital ID
@apiParam {Number} disease_id			Disease ID

@apiSuccess {String[]} requirements 	Document requirements for this combination of Hospital and Disease.

@apiError RequirementNotFound The combination of <code>hospital_id</code> and <code>disease_id</code> of the Requirement was not found.

@apiVersion 0.0.0
"""