from rest_framework import viewsets
from .serializers import UserSerializer, FavoriteSerializer, FanArtSerializer
from .models import User, Favorite, FanArt 

class UserList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FavoriteList(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

class FanArtList(viewsets.ModelViewSet):
    queryset = FanArt.objects.all()
    serializer_class = FanArtSerializer
