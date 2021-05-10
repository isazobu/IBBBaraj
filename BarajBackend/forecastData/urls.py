from django.urls import path


from .views import forecastDataList, forecastDetail


urlpatterns = [
    path('<int:pk>',forecastDetail.as_view()),
    path('', forecastDataList.as_view())

]
