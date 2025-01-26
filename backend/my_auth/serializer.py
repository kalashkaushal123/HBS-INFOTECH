from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'confirm_password', 'is_verified']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        # Check if the password and confirm_password match.
        password = attrs.get('password')
        confirm_password = attrs.get('confirm_password')
        
        if password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        
        user = User(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
        )
        
        user.set_password(validated_data['password'])
        user.save()
        return user


class VerifyAccountSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)

class ForgetPasswordRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)
    new_password = serializers.CharField(write_only=True)


# class AddressSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Address
#         fields = "__all__"
#         extra_kwargs = {
#             'profile': {'required': False, 'write_only': True}  # Make profile non-required
#         }

# class ProfileSerializer(serializers.ModelSerializer):
#     addresses = AddressSerializer(many=True)  # Nested AddressSerializer
#     class Meta:
#         model = Profile
#         fields = "__all__"
#     def update(self, instance, validated_data):
#         # Prevent updating the email through the profile update API
#         if 'email' in validated_data:
#             validated_data.pop('email')  # Remove the email field if it's being updated
        
#         # Proceed with the update for other fields
#         return super().update(instance, validated_data)

# serializers.py

class ForgotEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)

class ResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    new_email = serializers.EmailField(required=True)
    otp = serializers.CharField(required=True, max_length=6)