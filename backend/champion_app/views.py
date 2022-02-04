from rest_framework.viewsets import ModelViewSet
from .models import SuperBowl, WorldSeries
from .serializers import SuperBowlSerializer, WorldSeriesSerializer

class SuperBowlViewSet(ModelViewSet):
    queryset = SuperBowl.objects.all().order_by('date_played')
    serializer_class = SuperBowlSerializer
    
class WorldSeriesViewSet(ModelViewSet):
    queryset = WorldSeries.objects.all().order_by('year_played')
    serializer_class = WorldSeriesSerializer
