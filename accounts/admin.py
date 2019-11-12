from django.contrib import admin
from .models import User, Profile

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

admin.site.register(User)
admin.site.register(Profile)
# admin.site.register(Buyer, BuyerAdmin)
# admin.site.register(Seller, SellerAdmin)
