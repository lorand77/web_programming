import json
from urllib.parse import urlencode
from urllib.request import urlopen

BASE_URL = "https://api.open-meteo.com/v1/forecast"
PARAMS = {
    "latitude": 29.76328,
    "longitude": -95.36327,
    "current": "temperature_2m",
}


def main() -> None:
    query = urlencode(PARAMS)
    url = f"{BASE_URL}?{query}"

    print(f"Fetching weather data from: {url}")

    with urlopen(url, timeout=10) as response:
        data = json.load(response)

    print(json.dumps(data, indent=2))


if __name__ == "__main__":
    main()
