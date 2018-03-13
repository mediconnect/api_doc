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