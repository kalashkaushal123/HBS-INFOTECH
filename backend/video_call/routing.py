# video_call/routing.py
from django.urls import re_path
from .consumers import VideoCallConsumer

# WebSocket URL patterns
websocket_urlpatterns = [
    re_path(r'ws/video/(?P<room_name>\w+)/$', VideoCallConsumer.as_asgi()),
]
