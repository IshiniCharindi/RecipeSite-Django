from django.urls import path
from .views import UserProfileView, change_password

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('change-password/', change_password, name='change-password'),
]
