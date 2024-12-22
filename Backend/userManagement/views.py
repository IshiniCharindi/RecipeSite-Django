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
    queryset = RecipieManagement.objects.filter(status='P')
    serializer_class = RecipieManagementSerializer

    @action(detail=False , methods=['GET'])
    def total_count_recipies(self,request):
        totalRecipies = RecipieManagement.objects.count()
        return Response({"total recipies":totalRecipies})

    @action(detail=True, methods=['POST'])
    def update_status(self, request, pk=None):
        try:
            recipe = self.get_object()
            status = request.data.get('status')
            if status not in ['P', 'A', 'R']:
                return Response({"error": "Invalid status value"}, status=400)

            recipe.status = status
            recipe.save()
            return Response({"message": "Status updated successfully"})
        except Exception as e:
            return Response({"error": str(e)}, status=400)