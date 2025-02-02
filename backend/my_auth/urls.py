from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import resend_otp

urlpatterns = [
    path('register/', register, name='Email_register'),
    path('verify/', verify_otp, name='Verify_otp'),
    path('forgot/pass/', forgot_password, name='forgot_password'),
    path('reset/pass/', reset_password, name='reset_password'),
    path('forgot/email/', forgot_email, name='forgot_email'),
    path('reset/email/', reset_email, name='reset_email'),
    
    path ('login/', login, name='email_pass_to_obtain_accesstoken'),
    path('resend-otp/', resend_otp, name='resend_otp'),

    path('logout/', logout, name='logout'),


    # path('token/', TokenObtainPairView.as_view(), name='email_pass_to_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token_to_obtain_acesstoken'),        
]
