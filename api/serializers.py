from rest_framework import serializers

from accounts.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = (
        'id', 'avatar', 'age', 'gender', 'location', 'graduation_date', 'bio', 'position', 'weight', 'school', 'is_professional', 'draft_round', 'draft_pick', 'stat_link',
        )

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
