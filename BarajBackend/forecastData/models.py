from django.db import models

# Create your models here.
class forecastData(models.Model):

     
   
    date  = models.DateField()
    
    volume = models.FloatField()
    
    forecastVolume = models.FloatField(default=-1)


    def __str__(self):
        return str(self.date)

    
