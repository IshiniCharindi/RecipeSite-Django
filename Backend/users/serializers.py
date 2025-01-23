from rest_framework import serializers
from .models import User
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