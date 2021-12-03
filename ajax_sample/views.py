import random

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
weathers = list(
    map(
        lambda item: {
            "type": item["type"],
            "alt": item["alt"],
            "src": "https://icongr.am/fontawesome/{}.svg?color={}".format(
                item["icon"], item["color"]
            ),
        },
        [
            {"type": "Sunny", "alt": "sun", "icon": "sun-o", "color": "ffaa00"},
            {"type": "Rainy", "alt": "umbrella", "icon": "umbrella", "color": "0000ff"},
            {"type": "Cloudy", "alt": "cloud", "icon": "cloud", "color": "888888"},
            {
                "type": "Snowy",
                "alt": "snowflake",
                "icon": "snowflake-o",
                "color": "88eeee",
            },
        ],
    )
)


def index(request):
    days = 7
    params = {}
    params["title"] = "{} days forecast".format(days)
    params["forecasts"] = random.choices(weathers, k=days)  # nosec

    return render(request, "ajax_sample/index.html", params)


def get_forecast(request):
    days = int(request.GET.get("days")) if "days" in request.GET else 3

    return JsonResponse({"forecasts": random.choices(weathers, k=days)})  # nosec
