from django.shortcuts import render
from .models import UserManagement
from .models import RecipieManagement
from .serializers import UserManagementSerializer
from .serializers import RecipieManagementSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class UserManagementView(viewsets.ModelViewSet):
    queryset = UserManagement.objects.all()
    serializer_class = UserManagementSerializer

    @action(detail=False , methods=['GET'])
    def total_count_users(self,request):
        totalUsers = UserManagement.objects.count()
        return Response({"total users":totalUsers})

class RecipieManagementView(viewsets.ModelViewSet):
    queryset = RecipieManagement.objects.all()
    serializer_class = RecipieManagementSerializer

    @action(detail=False , methods=['GET'])
    def total_count_recipies(self,request):
        totalRecipies = RecipieManagement.objects.count()
        return Response({"total recipies":totalRecipies})