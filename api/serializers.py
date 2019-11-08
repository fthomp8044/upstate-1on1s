from rest_framework import serializers

from accounts.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

# class City(serializers.ModelSerializer):
#     class Meta:
#         model = City
#         fields = (
#         'id', 'name', 'state', 'zipcode'
#         )
#
# class School(serializers.ModelSerializer):
#     class Meta:
#         model = School
#         fields = ('school_type')
