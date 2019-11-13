from django.urls import path,include

from . import views


urlpatterns = [

    # path('handle-payment/', views.PaymentView.as_view(), name='handle_payment'),

    path('lessons/', include('lessons.urls')),
    path('checkout/', views.PaymentView.as_view(), name='checkout'),
    path('profile/<int:pk>/', views.ProfileRetrieveAPIView.as_view(), name='profile_retrieve_update_destroy'),
    path('profile/<str:selection>/', views.ProfileList.as_view(), name='profile_list_by_lesson_type'),
    path('user/profile/', views.AthleteProfileView.as_view(), name='user_profile_view'),
    path('profile/', views.ProfileListCreateAPIView.as_view(), name='profile_create'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/login/', views.CustomAuthToken.as_view(), name='login'),
    # path('rest-auth/user/<int:pk>/', views.UserCustomAuthToken.as_view(), name='user'),

    path('rest-auth/', include('rest_auth.urls')),

]
