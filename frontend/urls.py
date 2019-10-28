from django.urls import path, re_path

from .views import IndexView
#if you used namespace='frontend' in the conf urls, then you must include a app_name='frontend'
app_name = 'frontend'

urlpatterns = [
    path('login/', IndexView.as_view(), name = 'login'),
    path('signup/', IndexView.as_view(), name = 'signup'),
    path('', IndexView.as_view(), name = 'index'),
]
