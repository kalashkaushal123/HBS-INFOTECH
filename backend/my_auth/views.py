from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .emails import *
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializer import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


def handle_error(e):
    return Response({
        'status': 500,
        'message': 'Internal server error',
        'data': str(e),
    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def register(request):
    try:
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            send_otp_via_mail(user.email, user.otp)
            return Response({
                "status": 200,
                "message": "Registered successfully. Check your email for verification.",
                'data': serializer.data,
                "access_token": access_token,
            })

        return Response({
            'status': 400,
            'message': 'Something went wrong',
            'data': serializer.errors,
        })
    except Exception as e:
        return handle_error(e)

@api_view(['POST'])
def verify_otp(request):
    try:
        data = request.data
        serializer = VerifyAccountSerializer(data=data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp = serializer.validated_data['otp']
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'Invalid email',
                    'data': 'User with this email does not exist.',
                })

            if user.otp != otp:
                return Response({
                    'status': 400,
                    'message': 'Invalid OTP',
                    'data': 'The OTP provided does not match.',
                })

            # Mark user as verified
            user.is_verified = True
            user.save()

            send_account_verified_email(email)

            # Generate JWT token
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            return Response({
                'status': 200,
                'message': 'Verified successfully',
                'data': {'email': email},
                'access_token': access_token,
            })

        return Response({
            'status': 400,
            'message': 'Something went wrong',
            'data': serializer.errors,
        })
    except Exception as e:
        return handle_error(e)
        
@api_view(['POST'])
def forgot_password(request):
    try:
        data = request.data
        email = data.get('email')

        if not email:
            return Response({
                'status': 400,
                'message': 'Please provide an email address.',
                'data': {
                    'email': ''
                }
            })
            
        user = User.objects.filter(email=email).first()
        if not user:
            return Response({
                'status': 400,
                'message': 'User with this email does not exist',
                'data': {
                    'email': email
                }
            })

        # Send OTP to the user's email
        send_forget_pass_otp_via_mail(user.email)
        return Response({
            'status': 200,
            'message': 'OTP sent to your email for password reset',
        })
    except Exception as e:
        return handle_error(e)   

@api_view(['POST'])
def reset_password(request):
    try:
        data = request.data
        email = data.get('email')
        otp = data.get('otp')
        new_password = data.get('new_password')

        # Check if all required fields are provided
        if not email or not otp or not new_password:
            return Response({
                'status': 400,
                'message': 'Email, OTP, and new password are required',
                'data': {
                    'email': email,
                    'otp': otp,
                    'new_password': new_password
                }
            })

        # Check if the email exists
        user = User.objects.filter(email=email).first()
        if not user:
            return Response({
                'status': 400,
                'message': 'User with this email does not exist',
            })

        # Check if the OTP matches
        if str(user.otp) != str(otp):
            return Response({
                'status': 400,
                'message': 'Invalid OTP',
            })

        # Reset the password
        user.set_password(new_password)
        user.otp = None  # Clear the OTP
        user.save()

        return Response({
            'status': 200,
            'message': 'Password reset successfully',
        })
    except Exception as e:
        return handle_error(e)

@api_view(['POST'])
def login(request):
    try:
        data = request.data
        email = data.get('email') 
        password = data.get('password')

        # Check if both email and password are provided
        if not email or not password:
            return Response({
                'status': 400,
                'message': 'Email and password are required',
                'data': {'email': email, 'password': password},
            })

        user = authenticate(email=email, password=password)
        if user:
            # Generate JWT token
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                'status': 200,
                'message': 'Logged in successfully',
                'data': {'Bearer token': access_token}
            })

        # Invalid credentials
        return Response({
            'status': 400,
            'message': 'Invalid Credentials',
        })
    except Exception as e:
        return handle_error(e)

# @api_view(['GET'])
# def profile(request):
#     profiles = Profile.objects.all()  # Fetch all profiles
#     profile_serializer = ProfileSerializer(profiles, many=True)  # Serialize profiles
#     return Response({
#         'status': 200,
#         'data': profile_serializer.data
#     }, status=status.HTTP_200_OK)
       
# @api_view(['GET', 'PUT'])
# @permission_classes([IsAuthenticated])  # Only authenticated users can access
# def profile_update(request, user_id):
    try:
        # Retrieve the profile of the user
        profile = Profile.objects.get(user__id=user_id)
    except Profile.DoesNotExist:
        return Response({"error": "Profile not found."}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        # Serialize the profile data and return it
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # Serialize the request data and validate it
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()  # Update the profile
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'POST', 'PUT'])
# def address(request, profile_id):
#     try:
#         profile = Profile.objects.get(id=profile_id)

#         if request.method == 'GET':
#             # Fetch the address associated with this profile
#             address = Address.objects.filter(profile=profile).first()
#             if not address:
#                 return Response({
#                     'status': 200,
#                     'message': 'No address set for this profile.',
#                     'data': {}
#                 }, status=status.HTTP_200_OK)
            
#             # If address exists, return it
#             serializer = AddressSerializer(address)
#             return Response(serializer.data, status=status.HTTP_200_OK)

#         elif request.method == 'POST':
#             # Create a new address for the profile (if it doesn't exist yet)
#             # Check if the address already exists
#             existing_address = Address.objects.filter(profile=profile).first()
#             if existing_address:
#                 return Response({
#                     'status': 400,
#                     'message': 'An address already exists for this profile. Use PUT to update it.',
#                 }, status=status.HTTP_400_BAD_REQUEST)
            
#             # Remove 'profile' from the request data since it's determined by the URL
#             request_data = request.data.copy()
#             request_data['profile'] = profile.id

#             # Create a new address
#             serializer = AddressSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()  # Associate the new address with the profile
#                 return Response({
#                     'status': 201,
#                     'message': 'Address created successfully.',
#                     'data': serializer.data
#                 }, status=status.HTTP_201_CREATED)
#             return Response({
#                 'status': 400,
#                 'message': 'Invalid data for creating address.',
#                 'data': serializer.errors
#             }, status=status.HTTP_400_BAD_REQUEST)

#         elif request.method == 'PUT':
#             # Update the existing address for the profile
#             address = Address.objects.filter(profile=profile).first()
#             if not address:
#                 return Response({
#                     'status': 400,
#                     'message': 'No address found for this profile. Use POST to create an address.',
#                 }, status=status.HTTP_400_BAD_REQUEST)

#             # Update the address with the new data
#             serializer = AddressSerializer(address, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': 200,
#                     'message': 'Address updated successfully.',
#                     'data': serializer.data
#                 }, status=status.HTTP_200_OK)
#             return Response({
#                 'status': 400,
#                 'message': 'Invalid data for updating address.',
#                 'data': serializer.errors
#             }, status=status.HTTP_400_BAD_REQUEST)

#     except Profile.DoesNotExist:
#         return Response({
#             'status': 404,
#             'message': 'Profile not found.',
#         }, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def forgot_email(request):
    try:
        data = request.data
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return Response({
                'status': 400,
                'message': 'Email and password are required',
                'data': {'email': email, 'password': password},
            })
            
        user = authenticate(email=email, password=password)
        if not user:
            return Response({
                'status': 400,
                'message': 'Invalid email or password',
                'data': {'email': email},
            })
        # Send OTP to the user's email
        send_forget_pass_otp_via_mail(user.email)
        return Response({
            'status': 200,
            'message': 'OTP sent to your email for password reset',
        })
    except Exception as e:
        return handle_error(e)   


@api_view(['POST'])
def reset_email(request):
    try:
        # Use the ResetEmailSerializer to validate the request data
        serializer = ResetEmailSerializer(data=request.data)
        
        if serializer.is_valid():
            # Extract validated data
            email = serializer.validated_data['email']
            new_email = serializer.validated_data['new_email']
            otp = serializer.validated_data['otp']

            # Fetch the user by previous email
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'User with this email does not exist.',
                })

            # Verify OTP
            if str(user.otp) != str(otp):
                return Response({
                    'status': 400,
                    'message': 'Invalid OTP.',
                })

            # Change the email and clear OTP
            user.email = new_email
            user.otp = None  # Clear OTP after successful verification
            user.save()

            return Response({
                'status': 200,
                'message': 'Email updated successfully.',
            })

        # If the serializer is not valid, return validation errors
        return Response({
            'status': 400,
            'message': 'Validation failed.',
            'errors': serializer.errors
        })

    except Exception as e:
        return handle_error(e)
