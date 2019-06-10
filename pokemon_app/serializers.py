from rest_framework import serializers
from .models import User, Favorite, FanArt
import requests

class FanArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = FanArt
        fields = ("id", "url", "create_date", "user") 

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ("id", "favorite_pokemon", 'user')

class UserSerializer(serializers.ModelSerializer):
    favorites = FavoriteSerializer(many=True, read_only=True)
    fanarts = FanArtSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ("id", "user_name", "password", "favorites", "fanarts")
