from rest_framework import serializers


from .models import damVolume


class damVolumeSerializer(serializers.ModelSerializer):

    class Meta:
        model = damVolume
        fields = ['year','volume','area']
        #['city','_year', 'waterCapita']
