"""
@api {get} /slot/availability Request Slot Information
@apiName SlotDisplay
@apiGroup Slot
@apiDescription Display information about a slot.

@apiParam {UUID} hospital			Hospital ID
@apiParam {Number} disease			Disease ID

@apiSuccess {Object[4]} available 		Abailable slots for the next four weeks.
@apiSuccess {UUID} available.hospital 		hospital id
@apiSuccess {UUID} available.disease 			disease id
@apiSuccess {Date} available.week_start 		time of week start
@apiSuccess {Number} available.availability 		slots left


@apiError SlotNotFound The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.
"""

"""
@api {put} /slot/batch/create 	Create or Update Slot Information
@apiName UpdateSlot
@apiGroup Slot
@apiDescription Update a slot.

@apiParam {Object[]} hospital_list			hospital list
@apiParam {UUID} hospital_list.hospital_id			hospital ID
@apiParam {Object[]} hospital_list.disease_list			disease list
@apiParam {UUID} hospital_list.disease_list.disease_id			disease ID
@apiParam {Object[]} hospital_list.disease_list.date_slots			available slots on dates
@apiParam {Date} hospital_list.disease_list.date_slots.dates		slot date
@apiParam {Number} hospital_list.disease_list.date_slots.quantity		slot total availablity
@apiParam {String} hospital_list.disease_list.date_slots.type		"add" or "change"


@apiSuccess {UUID[]} created 		Successfully created slots
@apiSuccess {UUID[]} updated 		Successfully updated slots
@apiSuccess {Object[]} error 		Slots runs into errors
@apiSuccess {UUID} error.time_slot 		Slot ID runs into errors
@apiSuccess {UUID} error.error  		Type of error
@apiSuccess {UUID} error.detail 		detail reason



@apiError SlotNotFound The combination of <code>hospital_id</code> and <code>disease_id</code> of the Slot was not found.
@apiError InvalidAuthorization		This operation is invalid at this stage.

"""