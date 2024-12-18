from django.shortcuts import render
from .models import UserManagement
from .serializers import UserManagementSerializer
from rest_framework import viewsets


class UserManagementView(viewsets.ModelViewSet):
    queryset = UserManagement.objects.all()
    serializer_class = UserManagementSerializer

