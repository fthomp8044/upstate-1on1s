from django.urls import path

from .views import LessonListAPIView, LessonDetailAPIView, LessonChargeView


urlpatterns = [
  path('', LessonListAPIView.as_view(), name='Lesson_list'),
  path('charge/', LessonChargeView.as_view(), name='charge'),
  path('<int:pk>/', LessonDetailAPIView.as_view(), name='Lesson_detail'),
]
