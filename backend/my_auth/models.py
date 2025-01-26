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



    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']  # Ensure name fields are required on signup
    
    objects = UserManager()
    def __str__(self):
        return self.email

# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
#     first_name = models.CharField(max_length=100, blank=True, null=True)
#     last_name = models.CharField(max_length=100, blank=True, null=True)
#     email = models.EmailField(max_length=255, blank=True, null=True)  # New email field
#     gender = models.CharField(max_length=10,blank=True,null=True)
#     mobile_number = models.CharField(
#         max_length=10,
#         unique=True,
#         blank=True,
#         null=True
#     ) 


# class Address(models.Model):
#     profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='addresses')
#     name = models.CharField(max_length=50)  # name of the user of that adress
#     mobile_number = models.CharField(max_length=10, blank=True, null=True)  # Mobile number for the address
#     pin_code = models.CharField(max_length=6)
#     address = models.TextField()
#     city = models.CharField(max_length=50)
#     state = models.CharField(max_length=20)
#     landmark = models.CharField(max_length=100, blank=True, null=True)
#     address_type = models.CharField(max_length=10,default='Home')

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         # Create a profile only if the user is newly created
#         profile, created = Profile.objects.get_or_create(user=instance)
#         if created:
#             profile.email = instance.email
#             profile.save()

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     profile = instance.profile
#     profile.email = instance.email  # Ensure that the email is updated in the profile
#     profile.save()

# def is_otp_expired(self):
#         """
#         Check if OTP has expired (more than 5 minutes).
#         """
#         if not self.otp_expiration:
#             return True  # OTP hasn't been generated yet
#         return timezone.now() > self.otp_expiration