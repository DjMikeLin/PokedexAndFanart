from django.contrib import admin
from .models import User, Favorite, FanArt

# Register your models here.
admin.site.register([User, Favorite, FanArt])
