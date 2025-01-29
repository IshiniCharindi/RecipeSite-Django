from django.urls import path
from .views import UserManagementView,RecipieManagementView,ContactViewSet,RegisterView, loginView, UpdateUserView

urlpatterns = [
    path('users/',UserManagementView.as_view,name="userManagement"),
    path('recipies/',RecipieManagementView.as_view,name="recipieManagement"),
    path('contact/', ContactViewSet.as_view, name="contact"),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', loginView.as_view(), name='login'),
    path('updates/', UpdateUserView.as_view(), name='update_user'),
]
