import requests

print(requests.post('http://localhost:5000/calc_drr', json={'clicks': 22, 'money': 12, 'site': 1, 'manager': 12, 'traffic': 11}).json())

