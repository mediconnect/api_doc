"""
@api {get} /slot/:hospital_id/:disease_id Request Slot Information
@apiName SlotDisplay
@apiGroup Slot
@apiDescription Display information about a slot.

@apiParam {Number} hospital_id			Hospital ID
@apiParam {Number} disease_id			Disease ID

@apiSuccess {Number[4]} available 		Abailable slots for the next four weeks.

@apiError SlotNotFound The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.
"""

"""
@api {put} /slot/:hospital_id/:disease_id Update Slot Information
@apiName UpdateSlot
@apiGroup Slot
@apiDescription Update a slot.

@apiParam {Number} hospital_id			Hospital ID
@apiParam {Number} disease_id			Disease ID
@apiParam {Number[4]} available 		Abailable slots for the next four weeks.
@apiParam {String} 	token 				Token to verify authorization.

@apiError SlotNotFound The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.
@apiError InvalidAuthorization		This operation is invalid at this stage.

"""