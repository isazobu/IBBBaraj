from django.http import HttpResponse
from django.shortcuts import render


def homepage(request):
    print(request)
    return render(request,'index.html')