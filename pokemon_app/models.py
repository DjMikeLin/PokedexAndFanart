from django.db import models
from django import forms
from datetime import datetime

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=255, unique=True, blank=False)
    password = models.CharField(max_length=255, blank=False, default="")
    
    def __str__(self):
        return self.user_name;

class Favorite(models.Model):
    favorite_pokemon = models.CharField(max_length=255, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorites', blank=False)

class FanArt(models.Model):
    url = models.URLField(max_length=500, blank=False)
    create_date = models.DateTimeField(default=datetime.now, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='fanarts', blank=False)
