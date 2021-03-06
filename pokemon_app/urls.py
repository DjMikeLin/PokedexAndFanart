from rest_framework import routers
from .views import UsersList, UserList, FavoriteList, FanArtList, PokedexList

router = routers.SimpleRouter()
router.register('users', UsersList)
router.register(r'users/find/(?P<user>[\w-]+)', UserList, base_name='user') 
router.register('favorites', FavoriteList)
router.register('fanarts', FanArtList)
router.register(r'pokedex/(?P<offset>[\w-]+)', PokedexList, base_name='pokedex')

urlpatterns = router.urls
