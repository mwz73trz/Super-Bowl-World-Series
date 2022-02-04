from rest_framework.serializers import ModelSerializer
from .models import SuperBowl, WorldSeries

class SuperBowlSerializer(ModelSerializer):
    class Meta:
        model = SuperBowl
        fields = '__all__'
        
class WorldSeriesSerializer(ModelSerializer):
    class Meta:    
        model = WorldSeries
        fields = '__all__'

