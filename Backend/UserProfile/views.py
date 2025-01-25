from django.contrib.auth.models import User # type: ignore
from django.contrib.auth import update_session_auth_hash # type: ignore
from rest_framework import status # type: ignore
from rest_framework.permissions import IsAuthenticated # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.views import APIView # type: ignore
from .serializers import UserSerializer
from rest_framework.decorators import api_view # type: ignore
from django.contrib.auth.password_validation import validate_password # type: ignore
from rest_framework.exceptions import ValidationError # type: ignore

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def change_password(request):
    user = request.user
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')

    # Check if the old password is correct
    if not user.check_password(old_password):
        return Response({'error': 'Old password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)

    # Validate new password
    try:
        validate_password(new_password, user)
    except ValidationError as e:
        return Response({'errors': e.messages}, status=status.HTTP_400_BAD_REQUEST)

    # Set the new password
    user.set_password(new_password)
    user.save()

    # Re-authenticate the user after password change
    update_session_auth_hash(request, user)
    
    return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
