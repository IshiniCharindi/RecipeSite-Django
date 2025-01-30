from rest_framework.routers import DefaultRouter
from .views import UserManagementView, RecipieManagementView, ContactViewSet, RegisterView, loginView, UpdateUserView
from django.urls import path, include

router = DefaultRouter()

router.register(r'recipes', RecipieManagementView, basename='recipe')

urlpatterns = [
    path('users/', UserManagementView.as_view({'get': 'list', 'post': 'create'}), name="userManagement"),
    path('', include(router.urls)),
    path('contact/', ContactViewSet.as_view({'get': 'list', 'post': 'create'}), name="contact"),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', loginView.as_view(), name='login'),
    path('updates/', UpdateUserView.as_view(), name='update_user'),
]

urlpatterns += router.urls

