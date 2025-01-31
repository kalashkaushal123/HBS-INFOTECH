from django.db import models
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from .manager import UserManager
from django.utils.translation import gettext_lazy as _
import uuid
from django.utils import timezone
from datetime import timedelta
from django.utils.timezone import now



class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True, verbose_name=_("email address"))
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateField(auto_now=True)
    last_login = models.DateTimeField(default=now)

    otp = models.CharField(max_length=6, null=True, blank=True)
    otp_expiration = models.DateTimeField(null=True, blank=True)
    otp_type = models.CharField(max_length=20, null=True, blank=True)  # Add this line

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']  # Ensure name fields are required on signup
    
    objects = UserManager()
    def __str__(self):
        return self.email

def is_otp_expired(self):
        """
        Check if OTP has expired (more than 5 minutes).
        """
        if not self.otp_expiration:
            return True  # OTP hasn't been generated yet
        return timezone.now() > self.otp_expiration

def verify_otp(self, otp):
        """
        Verify OTP for the user.
        """
        # Check if OTP is expired
        if self.is_otp_expired():
            return "Your OTP has expired. Please try again."  # OTP expired message
        
        # Check if OTP matches
        if self.otp == otp:
            return "OTP verified successfully."
        
        return "Invalid OTP. Please try again."