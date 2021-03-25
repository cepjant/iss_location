import requests


def get_iss_location():
    iss_info = requests.get('http://api.open-notify.org/iss-now.json').json()
    latitude = iss_info['iss_position']['latitude']
    longitude = iss_info['iss_position']['longitude']
    return latitude, longitude

