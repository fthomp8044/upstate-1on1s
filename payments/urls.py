from django.urls import path

from . import views

urlpatterns = [
    path('charge/', views.charge, name='charge'), # new view function
    path('', views.HomePageView.as_view(), name='payments'),
]
