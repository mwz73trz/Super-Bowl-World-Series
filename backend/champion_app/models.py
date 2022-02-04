from django.db import models

class SuperBowl(models.Model):
    name = models.CharField(max_length=25)
    date_played = models.DateField()
    win_team = models.CharField(max_length=75)
    win_score = models.IntegerField()
    lose_team = models.CharField(max_length=75)
    lose_score = models.IntegerField()
    stadium = models.CharField(max_length=75)
    where = models.CharField(max_length=75)
    mvp = models.CharField(max_length=200)
    
    def __str__(self):
        return f"{self.name}"
    
class WorldSeries(models.Model):
    year_played = models.IntegerField()
    win_team = models.CharField(max_length=75)
    winner_wins = models.IntegerField()
    lose_team = models.CharField(max_length=75)
    loser_wins = models.IntegerField()
    
    def __str__(self):
        return f"{self.year_played}"
