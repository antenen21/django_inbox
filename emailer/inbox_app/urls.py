from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name="home-path" ),
    path('inbox/', views.inbox, name="inbox-path" ),
]
