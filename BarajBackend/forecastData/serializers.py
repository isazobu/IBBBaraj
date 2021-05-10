from rest_framework import serializers


from .models import forecastData


class forecastDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = forecastData
        fields = '__all__'

