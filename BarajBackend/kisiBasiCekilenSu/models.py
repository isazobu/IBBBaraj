from django.db import models


class WaterperCapita(models.Model):

    year = models.IntegerField()
    city= models.CharField(max_length=20)
    waterCapita = models.IntegerField()




