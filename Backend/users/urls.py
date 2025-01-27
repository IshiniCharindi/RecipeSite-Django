from django.urls import path
from .views import RegisterView, loginView, UpdateUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', loginView.as_view(), name='login'),
    path('update/', UpdateUserView.as_view(), name='update_user'),  # New URL for updating user
]
