from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status

from django.db import close_old_connections
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

# Create your views here.
from .models import forecastData
from .serializers import forecastDataSerializer

class forecastDataList(generics.ListCreateAPIView):
    authentication_classes = [] #disables authentication
    permission_classes = [] #disables permission

    serializer_class = forecastDataSerializer
    queryset = forecastData.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    
    filterset_fields = ['date']
    '''
    def get(self, request, format=None):
        
        tufeList = Tufe.objects.all().order_by('-date')
        serializer = TufeSerializer(weatherList, many=True)
        response = Response(serializer.data) 
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Headers"] = "*"

        return response
    '''
    
    def post(self, request):
        print(request.data)
        serializer = forecastDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            close_old_connections()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        close_old_connections()
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
'''
    def delete(self, request):
        forecastList = forecastData.objects.all()
        operation = forecastList.delete()
        data ={}
        if operation: 
            data['success'] = "delete successful"
        else:
            data['failed'] = "delete failed"
        return  Response(data=data)
'''
class forecastDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = forecastData.objects.all()
    serializer_class = forecastDataSerializer
    filter_backends = [DjangoFilterBackend]
