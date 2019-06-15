from rest_framework import viewsets
from .serializers import UserSerializer, FavoriteSerializer, FanArtSerializer
from .models import User, Favorite, FanArt 
import requests
import re
from rest_framework.response import Response

class UsersList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer     

class UserList(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserSerializer
    def get_queryset(self):
        user = self.kwargs['user']
        print(user)
        return User.objects.filter(user_name=user)

class FavoriteList(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

class FanArtList(viewsets.ModelViewSet):
    queryset = FanArt.objects.all()
    serializer_class = FanArtSerializer

class PokedexList(viewsets.ViewSet):
    def list(self, request, offset):
        results = requests.get(f'https://pokeapi.co/api/v2/pokemon/?offset={offset}&limit=30').json()
        for result in results['results']:
            id = re.search(r'(?<=https://pokeapi.co/api/v2/pokemon/)\d*', result['url'], flags=0).group(0)
            result['url'] = f'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png' 
        
        return Response(results)
