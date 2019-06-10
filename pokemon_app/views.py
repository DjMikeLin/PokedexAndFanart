from rest_framework import viewsets
from .serializers import UserSerializer, FavoriteSerializer, FanArtSerializer, PokedexSerializer
from .models import User, Favorite, FanArt 
import requests

class UserList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FavoriteList(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

class FanArtList(viewsets.ModelViewSet):
    queryset = FanArt.objects.all()
    serializer_class = FanArtSerializer

class PokedexList(viewsets.ViewSet):
    response = requests.get('https://pokeapi.co/api/v2/pokemon/1')
    queryset = response.json()#['sprites']['front_default']
    serializer_class = PokedexSerializer
