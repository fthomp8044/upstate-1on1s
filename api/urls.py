from django.urls import path,include

from . import views


urlpatterns = [
    path('profile/<str:selection>/', views.ProfileList.as_view(), name='profile_list_by_lesson_type'),
    path('user/profile/', views.AthleteProfileView.as_view(), name='user_profile_view'),
    path('profile/<int:pk>/', views.ProfileRetrieveUpdateDestroyAPIView.as_view(), name='profile_retrieve_update_destroy'),
    path('profile/', views.ProfileListCreateAPIView.as_view(), name='profile_create'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/login/', views.CustomAuthToken.as_view(), name='login'),
    # path('rest-auth/user/<int:pk>/', views.UserCustomAuthToken.as_view(), name='user'),

    path('rest-auth/', include('rest_auth.urls')),

    # path('athletics/new/', StudentAthleteCreateAPIView.as_view(), name='athletics_create'),
    # path('athletics/<int:pk>/', StudentAthleteDetailAPIView.as_view(), name='athletics_detail'),
    # path('athletics/', StudentAthleteListAPIView.as_view(), name='athletics_list'),

]
