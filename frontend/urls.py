from django.urls import path, re_path

from .views import IndexView
#if you used namespace='frontend' in the conf urls, then you must include a app_name='frontend'
app_name = 'frontend'

urlpatterns = [
    path('', IndexView.as_view(), name = 'index'),
]
