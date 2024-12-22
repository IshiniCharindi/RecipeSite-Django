
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from userManagement.views import UserManagementView,RecipieManagementView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("users",UserManagementView,basename="userManagement")
route.register("recipies",RecipieManagementView,basename="recipieManagement")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(route.urls))
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
