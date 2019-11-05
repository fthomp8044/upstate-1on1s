from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, viewsets, views
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
# from django.views.generic.base import TemplateView

from accounts.models import Profile
from .serializers import ProfileSerializer
from .permissions import IsOwnerOrReadOnly


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'username': user.username
        })


# class UserCustomAuthToken(ObtainAuthToken):
#
#     def patch(self, request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data,
#                                            context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({
#             'token': token.key,
#             'user_id': user.pk,
#             'username': user.username
#         })

class ProfileListCreateAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProfileRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)




class AthleteProfileView(views.APIView):
    model = Profile
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def get(self, request):
        profile = get_object_or_404(Profile, user=request.user.id)
        serializer = ProfileSerializer(profile, many=False)
        return Response(serializer.data)



#
# class StudentAthleteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = StudentAthlete.objects.all()
#     serializer_class = StudentAthleteSerializer
