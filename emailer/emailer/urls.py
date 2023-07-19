
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('inbox_app.urls')),
    # Path to login page - rendered by Django's built-in login page - name="login"
    path('login/', include('django.contrib.auth.urls')),
]
