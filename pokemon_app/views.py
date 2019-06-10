from rest_framework import viewsets
from .serializers import UserSerializer, FavoriteSerializer, FanArtSerializer
from .models import User, Favorite, FanArt 
import requests
from rest_framework.response import Response

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
    def list(self, request, offset):
        results = requests.get(f'https://pokeapi.co/api/v2/pokemon/?offset={offset}&limit=30').json()['results'];
        for result in results:
            result['url'] = requests.get(result['url']).json()['sprites']['front_default']
        
        return Response(results)
