from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.models import User
from .serializers import UserSerializer, loginSerializer, UpdateUserSerializer
from django.contrib.auth.hashers import make_password

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
            user = User.objects.get(email=request.data.get('email'))  # Get the user by email

            # Serialize the updated data
            serializer = UpdateUserSerializer(user, data=request.data, partial=True)  # Partial to allow partial updates
            
            if serializer.is_valid():
                # If password is provided, hash it and update
                if 'old_password' in request.data and 'new_password' in request.data:
                    old_password = request.data['old_password']
                    
                    # Verify old password before allowing change
                    if not user.check_password(old_password):
                        return Response({'error': 'Old password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)
                    
                    # Hash the new password
                    serializer.validated_data['password'] = make_password(request.data['new_password'])

                # Save the updated user data
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
