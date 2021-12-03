from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("forecast", views.get_forecast, name="get_forecast"),
]
