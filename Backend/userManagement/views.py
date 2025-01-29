from django.shortcuts import render
from .models import UserManagement
from .models import RecipieManagement
from .serializers import UserManagementSerializer
from .serializers import RecipieManagementSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework import status
from .models import User
from .serializers import UserSerializer, loginSerializer, UpdateUserSerializer
from django.contrib.auth.hashers import make_password
import logging
from django.contrib.auth.hashers import check_password, make_password
logger = logging.getLogger(__name__)

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
        
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Thank you for your feedback!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class loginView(APIView):
    def post(self, request):
        serializer = loginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        return Response(
            {
                "user": {
                    "name": user.name,
                    "email": user.email,
                },
            },
            status=status.HTTP_200_OK,
        )
class UpdateUserView(APIView):
    def put(self, request):
        try:
            email = request.data.get('email')
            old_password = request.data.get('old_password')
            new_password = request.data.get('new_password')

            if not email or not old_password or not new_password:
                return Response({'error': 'Email, old password, and new password are required.'},
                                status=status.HTTP_400_BAD_REQUEST)

            user = User.objects.get(email=email)  # Get user by email

            # Verify old password manually
            if not check_password(old_password, user.password):
                return Response({'error': 'Old password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)

            # Hash and update new password
            user.password = make_password(new_password)
            user.save()

            return Response({'message': 'Password updated successfully.'}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'error': f'An error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)