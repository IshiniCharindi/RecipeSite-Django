from rest_framework import serializers
from .models import UserManagement
from .models import RecipieManagement
from .models import Contact
from .models import Review

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

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'name', 'rating', 'review_text', 'created_at', 'recipe']