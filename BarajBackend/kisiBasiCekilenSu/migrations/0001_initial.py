# Generated by Django 3.2 on 2021-04-26 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WaterperCapita',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('city', models.CharField(max_length=20)),
                ('waterCapita', models.IntegerField()),
            ],
        ),
    ]
