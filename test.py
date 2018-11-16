import json
import requests
import datetime
BASE_URL = 'http://127.0.0.1:8000/api/'
session = requests.session()



def get_csrf(session):
    if 'csrftoken' in session.cookies:
        # Django 1.6 and up
        csrftoken = session.cookies['csrftoken']
    else:
        # older versions
        csrftoken = session.cookies['csrf']
    return csrftoken
# ====================== Customer Login ============================= #

customer_response = session.post(BASE_URL+'customer/login',
                         data={
                            'email': 'login0@test.com',
                            'password': '/.,Buz123',
                         })
session.auth = ('login0@test.com','/.,Buz123')
print(json.loads(customer_response.content))
"""
{'msg': 'success', 'user_id': 12, 'customer_id': 4}
"""
customer_id = json.loads(customer_response.content)['customer_id']

# =========================== Customer Profile =========================== #
customer_profile = session.get(BASE_URL+'customer/profile?id={}'.format(customer_id))
print(json.loads(customer_profile.content))
"""
{'first_name': 'login', 'last_name': 'test', 'email': 'login@test.com', 'tel': '123456789', 'address': 'the test is awesome'}
"""
# =========================== Customer Update Profile ==================== #
customer_profile_update = session.put(BASE_URL+'customer/profile?id={}'.format(customer_id),
                                      data={
                                          'id':customer_id,
                                          'tel':'111',
                                          'address':'2222',
                                      })
print(json.loads(customer_profile_update.content))
"""
{'msg': 'success'}
"""
# =========================== Customer Logout ============================ #
# =========================== Customer Create Patient ==================== #

patient_response = session.post(BASE_URL+'customer/{}/patient/'.format(customer_id),
                        data={
                            'first_name':'demo0',
                            'last_name':'patient0',
                            'first_name_pinyin':'pin0',
                            'last_name_pinyin':'yin0',
                            'gender':0,
                            'birthdate':datetime.date.today(),
                            'relationship':0,
                            'passport':'12345',
                            'notes':'hhhh',
                        })

print(json.loads(patient_response.content))
patient_id = json.loads(patient_response.content)['id']
"""
{'msg': 'created', 'id': 13}
"""
# ========================= Customer List Patient ========================= #
patient_list = session.get(BASE_URL+'customer/{}/patient/'.format(customer_id))
# print(json.loads(patient_list.content))
"""
[List of  Patient Objects]
"""
# ========================= Customer Patient Detail ======================= #
patient_detail = session.get(BASE_URL+'customer/{}/patient/{}'.format(customer_id,patient_id))
print(json.loads(patient_detail.content))
"""
Patient Object
"""
# ========================= Customer Update Patient ======================= #
patient_update = session.put(BASE_URL+'customer/{}/patient/{}/'.format(customer_id,patient_id),
                             data={
                                'first_name':'ssssasdf',
                                'last_name':'patient0',
                                'first_name_pinyin':'pin0',
                                'last_name_pinyin':'yin0',
                                'gender':0,
                                'birthdate':datetime.date.today(),
                                'relationship':0,
                                'passport':'12345',
                                'notes':'sssssss',
                            })
print(json.loads(patient_update.content))
"""
Updated Patient Object
"""
# ========================= Customer Delete Patient ======================= #
patient_delete = session.delete(BASE_URL+'customer/{}/patient/{}/'.format(customer_id,patient_id))
print(patient_delete)
"""
<Response [204]>
"""
# ========================= List Hospital ================================= #
hospital_list = session.get(BASE_URL+'hospital/?ordering=overall_rank')
print(json.loads(hospital_list.content))
"""
List of Hospital Objects
"""
# ========================= Hospital Detail =============================== #
hospital_detail = session.get(BASE_URL+'hospital/b3d5cdc1-10b4-4fe4-8620-fa4c1b7014b7/')
print(json.loads(hospital_detail.content))
"""
Hospital Object
"""
# ========================= List Disease =================================== #
disease_list = session.get(BASE_URL+'disease/?searching=b')
print(json.loads(disease_list.content))
"""
List of Disease Objects
"""
# ========================= Disease Detail ================================ #
disease_detail = session.get(BASE_URL+'disease/6af9f15b-fe33-46e6-9463-ea9281854397/')
print(json.loads(disease_detail.content))
"""
Disease Object
"""
# ========================= List Info ===================================== #
info_list = session.get(BASE_URL+'info/?ordering=-feedback_time')
print(json.loads(info_list.content))
"""
List of Info Objects
"""
# ========================= Info Detail =================================== #
info_detail = session.get(BASE_URL+'info/1a2da62c-a86e-4e71-98dd-764b1d1638e9')
print(json.loads(info_detail.content))
"""
Info Object
"""
# ========================= Search Info By Hospital  By Disease =========== #
# This is finding an exact match in the disease's keyword field
search_disease = session.get(BASE_URL+'search/?query=c')
print(json.loads(search_disease.content))
"""
{'diseases': List of Disease Objects with exact match of 'c' in keyword field,
'hospitals': List of Hospital Objects with available Info for this disease, ordered by info.rank,
'infos': List of Info ids, might be changed to Info objects if that is better}
"""
# ========================= Search Info By Hospital ======================= #
# This is unable to find an exact match, so return all diseases, also all infos
search_hospital = session.get(BASE_URL+'search/?query=a')
print(json.loads(search_hospital.content))
"""
{'diseases': List of All Disease Objects
'hospitals': [] 
'infos': List of Info ids, might be changed to Info objects if that is better}
"""
# ========================= Create or Update Slot (Create) ================ #
# the json parser for slot hasn't been fixed yet, and this will enforce supervisor permission in the future
payload = [
            {
                "hospital_id":'b3d5cdc1-10b4-4fe4-8620-fa4c1b7014b7',
                "diseases": [
                    {
                        "disease_id": '6af9f15b-fe33-46e6-9463-ea9281854397',
                        "date_slots": [
                            {
                                "date": str(datetime.datetime(2019, 1, 1) + datetime.timedelta(days=dt*7)),
                                "quantity": 5,
                                "type": "add"
                            }
                            for dt in range(7)
                        ]
                    }
                ]
            }
        ]
slot_create = session.post(BASE_URL+'slot/batch/create',
                           data=json.dumps(payload))
print(json.loads(slot_create.content))
"""
{"create":List of slot ids,
"updated":[],
"error":[]}
"""
# ========================= Create or Update Slot (Update) ================ #
payload = [
            {
                "hospital_id":'b3d5cdc1-10b4-4fe4-8620-fa4c1b7014b7',
                "diseases": [
                    {
                        "disease_id": '6af9f15b-fe33-46e6-9463-ea9281854397',
                        "date_slots": [
                            {
                                "date": str(datetime.datetime(2019, 1, 1) + datetime.timedelta(days=4 * 7)),
                                "quantity": 40,
                                "type": "change"
                            },{
                                "date": str(datetime.datetime(2019, 1, 1) + datetime.timedelta(days=5 * 7)),
                                "quantity": 15,
                                "type": "add"
                            },
                        ]
                    }
                ]
            }
        ]
slot_update = session.post(BASE_URL+'slot/batch/create',
                           data=json.dumps(payload))
print(json.loads(slot_update.content))
"""
{
"created":[],
"update": List of updated slot ids,
"error": []
}
"""
# ========================= List Slot ===================================== #
slot_list = session.get(BASE_URL+'slot/admin/')
print(json.loads(slot_list.content))
"""
List of Slot Objects
"""
# ========================= Slot Detail =================================== #
# in the future, we will support query with Info Id, for now it is still hospital and disease ID plus when
slot_detail = session.get(BASE_URL+'slot/availability?when=20190104&hospital=b3d5cdc1-10b4-4fe4-8620-fa4c1b7014b7')
print(json.loads(slot_detail.content))
"""
List of Slot Objects for Hospital b3d5cdc1-10b4-4fe4-8620-fa4c1b7014b7
"""

slot_detail = session.get(BASE_URL+'slot/availability?disease=6af9f15b-fe33-46e6-9463-ea9281854397&when=20190104')
print(json.loads(slot_detail.content))
"""
List of Slot Objects for Disease 6af9f15b-fe33-46e6-9463-ea9281854397&when=20190104'
"""
# ========================= Create Document =============================== #
# document_response = session.post(BASE_URL+'document/',
#                                  files={'file':open('pseudogrammar.txt','rb')},
#                                  data = {
#                                     'type':2,
#                                     'res':None,
#                                     'obsolete': True,
#                                     'description':'Sth',
#                                     'csrfmiddlewaretoken':get_csrf(session)})
# print(json.loads(document_response.content))
"""
{'msg': 'Created', 'id': '32d11edb-c4f3-4e78-a4a2-5550f6b304ec'}
"""
# ======================== List Document ================================== #
# ======================== Document Detail ================================ #
# ======================== Update Document ================================ #
# ======================== Delete Document ================================ #
# ======================== Request Document Requirement =================== #
