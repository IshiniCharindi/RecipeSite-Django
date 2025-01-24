from rest_framework import serializers
from .models import UserManagement
from .models import RecipieManagement
from .models import Contact

class UserManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserManagement
        fields = '__all__'


class RecipieManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipieManagement
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'