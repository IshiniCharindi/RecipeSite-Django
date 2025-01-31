from rest_framework import serializers
from .models import UserManagement
from .models import RecipieManagement
from .models import Contact
from .models import User
from .models import Review
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = ['id', 'name', 'email', 'password']

    def create(self, validated_data):
        password=validated_data.pop('password')
        validated_data['password']=make_password(password)
        return User.objects.create(**validated_data)

class loginSerializer(serializers.Serializer):
    email=serializers.EmailField(required=True)
    password=serializers.CharField(required=True)

    def validate(self, data):
        try:
            user=User.objects.get(email=data["email"])
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password")

        if not check_password(data['password'],user.password):
            raise serializers.ValidationError("Invalid email or password")


        data['user'] = user
        return data

class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email', 'password']  # Fields that can be updated
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},  # Password is optional during update
        }

    def validate_email(self, value):
        user = self.context.get('request').user
        if User.objects.exclude(pk=user.pk).filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

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