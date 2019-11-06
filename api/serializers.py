from rest_framework import serializers

from accounts.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = (
        'id', 'avatar', 'user', 'draft_round', 'draft_pick', 'position',
        'age', 'gender', 'location', 'graduation_date', 'bio', 'weight', 'school', 'is_professional', 'stat_link',
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
