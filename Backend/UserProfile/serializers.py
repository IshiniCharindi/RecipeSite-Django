from django.contrib.auth.models import User # type: ignore
from rest_framework import serializers  # type: ignore
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['profile_image']

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()

    class Meta:
        model = User
        fields = ['username', 'email', 'profile']

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile', {})
        profile_image = profile_data.get('profile_image')

        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        # Update user profile details
        profile = instance.profile
        if profile_image:
            profile.profile_image = profile_image
        profile.save()

        return instance
