from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# from .forms import AdminUserCreationForm, AdminUserChangeForm
from .models import User, Profile

#
# class UserAdmin(UserAdmin):
#     add_form = AdminUserCreationForm
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': (
#                 'email', 'password1', 'password2', 'is_active',
#                 'is_staff', 'is_superuser', 'is_seller',
#             ),
#         }),
#     )
#     form = AdminUserChangeForm
#     fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': (
#                 'id', 'email', 'password', 'is_active', 'is_staff',
#                 'is_superuser', 'date_joined', 'is_seller',
#             ),
#         }),
#     )
#     model = User
#     list_display = ['email',]
#     ordering = ('email',)
#     readonly_fields = ('id', 'date_joined',)
#
#
# class BuyerAdmin(admin.ModelAdmin):
#     list_display = ('id',)
#     readonly_fields = ('id',)
#
#
# class SellerAdmin(admin.ModelAdmin):
#     list_display = ('id', 'stripe_user_id', 'stripe_access_token',)
#     readonly_fields = ('id',)
#
#
admin.site.register(User)
admin.site.register(Profile)
# admin.site.register(Buyer, BuyerAdmin)
# admin.site.register(Seller, SellerAdmin)
