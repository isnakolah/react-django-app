from django.contrib import admin
from django.urls import path
from . import views

app_name = 'backend'

urlpatterns = [
    path('api/hello/', views.hello, name='hello'),
]
