# Generated by Django 3.2 on 2021-05-10 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forecastData', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='forecastdata',
            name='forecastVolume',
            field=models.FloatField(default=-1),
        ),
    ]
