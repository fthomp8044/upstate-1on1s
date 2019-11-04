# from rest_auth.registration.serializers import RegisterSerializer
#
#     class CustomRegisterSerializer(RegisterSerializer):
#
#         email = serializers.EmailField(required=True)
#         password1 = serializers.CharField(write_only=True)
#         name = serializers.CharField(required=True)
#         age = serializers.DateField(required=True)
#
#         def get_cleaned_data(self):
#             super(CustomRegisterSerializer, self).get_cleaned_data()
#
#             return {
#                 'password1': self.validated_data.get('password1', ''),
#                 'name': self.validated_data.get('name', ''),
#                 'email': self.validated_data.get('email', ''),
#                 'age': self.validated_data.get('age', ''),
#             }
#
#     class CustomUserDetailsSerializer(serializers.ModelSerializer):
#
#         class Meta:
#             model = User
#             fields = ('email','name','age')
#             read_only_fields = ('name',)
