from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from userManagement.views import UserManagementView, RecipieManagementView
from userManagement.views import ContactViewSet
from userManagement.views import UserManagementView,RecipieManagementView

router = DefaultRouter()
router.register("users",UserManagementView,basename="userManagement")
router.register("recipies",RecipieManagementView,basename="recipieManagement")
router.register("contact", ContactViewSet, basename="contact")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls))
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)