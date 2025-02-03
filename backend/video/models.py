from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=255)
    video_file = models.FileField(upload_to='videos/', blank=True, null=True)  # Add this line to store the actual file
    video_url = models.URLField(max_length=200, blank=True, null=True)  # Optional field if you want to store the S3 URL
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
