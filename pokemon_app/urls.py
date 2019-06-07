from rest_framework import routers
from .views import UserList, FavoriteList, FanArtList

router = routers.SimpleRouter()
router.register('users', UserList)
router.register('favorites', FavoriteList)
router.register('fanarts', FanArtList)

urlpatterns = router.urls
