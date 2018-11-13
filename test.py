import json
import requests
import datetime
BASE_URL = 'http://127.0.0.1:8000/api/'
session = requests.session()

customer_response = session.post(BASE_URL+'customer/login',
                         data={
                            'email': 'login@test.com',
                            'password': '/.,buz123',
                         })
print(json.loads(customer_response.content))
customer_id = json.loads(customer_response.content)['customer_id']

if 'csrftoken' in session.cookies:
    # Django 1.6 and up
    csrftoken = session.cookies['csrftoken']
else:
    # older versions
    csrftoken = session.cookies['csrf']

patient_response = session.post(BASE_URL+'customer/{}/patient/'.format(customer_id),
                        data={
                            'customer_id':4,
                            'first_name':'demo0',
                            'last_name':'patient0',
                            'first_name_pinyin':'pin0',
                            'last_name_pinyin':'yin0',
                            'gender':0,
                            'birthdate':datetime.date.today(),
                            'relationship':0,
                            'passport':'12345',
                            'csrfmiddlewaretoken' : csrftoken
                        })

print(json.loads(patient_response.content))