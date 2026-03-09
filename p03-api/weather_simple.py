import json
from urllib.parse import urlencode
from urllib.request import urlopen

BASE_URL = "https://api.open-meteo.com/v1/forecast"
PARAMS = {
    "latitude": 29.76328,
    "longitude": -95.36327,
    "current": "temperature_2m",
}

url = f"{BASE_URL}?{urlencode(PARAMS)}"

with urlopen(url, timeout=10) as response:
    data = json.load(response)
    temperature = data["current"]["temperature_2m"]

print(temperature)