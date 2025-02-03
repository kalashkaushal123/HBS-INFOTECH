import boto3
from botocore.exceptions import NoCredentialsError
from django.conf import settings
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Video
import logging

# Setting up logger
logger = logging.getLogger(__name__)

def upload_to_amazon_s3(file, filename):
    aws_access_key_id = settings.AWS_ACCESS_KEY_ID
    aws_secret_access_key = settings.AWS_SECRET_ACCESS_KEY
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME
    region_name = settings.AWS_S3_REGION_NAME

    file_name = f'videos/{filename}'  # Organize files into the 'videos/' folder in your bucket

    # Initialize S3 client
    s3 = boto3.client('s3', 
                      aws_access_key_id=aws_access_key_id, 
                      aws_secret_access_key=aws_secret_access_key,
                      region_name=region_name)

    try:
        # Upload file to S3 bucket
        s3.upload_fileobj(file, bucket_name, file_name)
        logger.info(f"File uploaded to {file_name} in {bucket_name}")
        file_url = f'https://{bucket_name}.s3.{region_name}.amazonaws.com/{file_name}'
        return file_url
    except NoCredentialsError:
        logger.error("AWS Credentials not available")
        return None

@api_view(['POST'])
def upload_video(request):
    if "video_file" not in request.FILES:
        return JsonResponse({"error": "No video file uploaded"}, status=400)
    
    video_file = request.FILES["video_file"]
    title = request.POST.get("title", "Untitled Video")

    logger.info(f"Attempting to upload video file: {video_file.name}")
    
    # Upload the video file to S3 and retrieve its URL
    video_url = upload_to_amazon_s3(video_file, video_file.name)
    
    if not video_url:
        return JsonResponse({"error": "Failed to upload video to S3"}, status=500)

    # Save the video information to the database
    video = Video.objects.create(title=title, video_url=video_url)

    return JsonResponse({
        "message": "Video uploaded successfully!",
        "video_id": video.id,
        "video_url": video.video_url,
    })
