from rest_framework import routers
from .views import UserList, FavoriteList, FanArtList, PokedexList

router = routers.SimpleRouter()
router.register('users', UserList)
router.register('favorites', FavoriteList)
router.register('fanarts', FanArtList)
router.register('pokedex', PokedexList)

urlpatterns = router.urls
