import imp
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SuperBowlViewSet, WorldSeriesViewSet

router = DefaultRouter()
router.register("superbowls", SuperBowlViewSet, basename="superbowl")
router.register("worldseries", WorldSeriesViewSet, basename="worldseries")

urlpatterns = router.urls