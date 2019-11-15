from django.urls import path, re_path

from .views import IndexView
#if you used namespace='frontend' in the conf urls, then you must include a app_name='frontend'
app_name = 'frontend'

urlpatterns = [
    path('signup/', IndexView.as_view(), name='signup'),
    path('login/', IndexView.as_view(), name='login'),

    path('profile/list/hitting/', IndexView.as_view(), name='profile_nav_list'),
    path('profile/list/fielding/', IndexView.as_view(), name='profile_nav_list'),
    path('profile/list/pitching/', IndexView.as_view(), name='profile_nav_list'),
    path('profile/detail/:id/', IndexView.as_view(), name='profile_detail'),
    path('profile/list/:lesson', IndexView.as_view(), name='profile_list'),
    path('profile/list/', IndexView.as_view(), name='profile_list'),
    path('profile/edit/', IndexView.as_view(), name='profile_edit'),
    path('profile/new/', IndexView.as_view(), name='profile_create'),
    path('profile/', IndexView.as_view(), name='profile'),

    path('booking/', IndexView.as_view(), name='booking'),
    path('checkout/:slug/', IndexView.as_view(), name='checkout'),

    path('home/', IndexView.as_view(), name='home'),
    path('', IndexView.as_view(), name='index'),
]
