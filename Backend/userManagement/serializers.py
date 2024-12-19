from rest_framework import serializers
from .models import UserManagement
from .models import RecipieManagement

class UserManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserManagement
        fields = '__all__'


class RecipieManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipieManagement
        fields = '__all__'