import os
import subprocess
from django.conf import settings
from .models import Video

def convert_video(video_id):
    video = Video.objects.get(id=video_id)
    title = video.title
    input_path = video.video.path
    output_dir = os.path.join(settings.MEDIA_ROOT, "videos", "converted", str(video_id))
    os.makedirs(output_dir, exist_ok=True)

    # Output paths for different qualities
    output_1080p = os.path.join(output_dir, f"{title}_1080p.mkv")
    output_720p = os.path.join(output_dir, f"{title}_720p.mkv")
    output_480p = os.path.join(output_dir, f"{title}_480p.mkv")

    # FFmpeg command to convert video to 1080p, 720p, and 480p
    command = [
        "ffmpeg", "-i", input_path,
        
        # Convert to 1080p
        "-map", "0:v:0", "-b:v:0", "3000k", "-s", "1920x1080", "-c:v", "libx264", "-crf", "21.5", "-preset", "slower", "-bsf:v", "filter_units=remove_types=6", 
        "-map", "0:a:0", "-c:a", "aac", "-b:a", "128k", output_1080p,
        
        # Convert to 720p
        "-map", "0:v:0", "-b:v:0", "1500k", "-s", "1280x720", "-c:v", "libx264", "-crf", "21.5", "-preset", "slower", "-bsf:v", "filter_units=remove_types=6", 
        "-map", "0:a:0", "-c:a", "aac", "-b:a", "128k", output_720p,
        
        # Convert to 480p
        "-map", "0:v:0", "-b:v:0", "800k", "-s", "854x480", "-c:v", "libx264", "-crf", "21.5", "-preset", "slower", "-bsf:v", "filter_units=remove_types=6", 
        "-map", "0:a:0", "-c:a", "aac", "-b:a", "128k", output_480p
    ]

    # Run the FFmpeg command
    subprocess.run(command, check=True)

    # Update database with paths for 1080p, 720p, and 480p files
    video.video_1080p.name = f"videos/converted/{video_id}/{title}_1080p.mkv"
    video.video_720p.name = f"videos/converted/{video_id}/{title}_720p.mkv"
    video.video_480p.name = f"videos/converted/{video_id}/{title}_480p.mkv"
    video.save()