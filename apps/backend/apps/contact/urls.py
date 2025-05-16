from django.urls import path
from .views import ContactFormHandler

urlpatterns = [
    path('contact/', ContactFormHandler.as_view(), name='contact'),
]
