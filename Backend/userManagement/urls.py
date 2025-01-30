from django.urls import path
from .views import UserManagementView, RecipieManagementView, ContactViewSet, RegisterView, loginView, UpdateUserView

urlpatterns = [
    path('users/', UserManagementView.as_view({'get': 'list', 'post': 'create'}), name="userManagement"),
    path('recipies/', RecipieManagementView.as_view({'get': 'list', 'post': 'create'}), name="recipieManagement"),
    path('contact/', ContactViewSet.as_view({'get': 'list', 'post': 'create'}), name="contact"),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', loginView.as_view(), name='login'),
    path('updates/', UpdateUserView.as_view(), name='update_user'),
]
