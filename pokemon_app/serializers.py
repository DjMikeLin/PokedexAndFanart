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

class PokedexSerializer(serializers.ModelSerializer):
    #name = serializers.CharField(max_length=200)
    image_url = requests.get('https://pokeapi.co/api/v2/pokemon/bulbasaur').json()['sprites']['front_default']
    print(image_url);
    #front_default_url = serializers.URLField(max_length=200)
