import json

import stripe

from django.urls import reverse
from django.views.generic import ListView, DetailView
from django.http import HttpResponseRedirect
from django.conf import settings
from django.views import View
from django.http import JsonResponse

from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Lesson
from .serializers import LessonSerializer


class LessonListAPIView(generics.ListAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class LessonDetailAPIView(generics.RetrieveAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


#################
# direct charge #
#################

class LessonChargeView(View):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        stripe.api_key = settings.STRIPE_SECRET_KEY
        json_data = json.loads(request.body)
        lesson = Lesson.objects.filter(id=json_data['lesson_id']).first()
        fee_percentage = .01 * int(lesson.fee)
        try:
            customer = get_or_create_customer(
                # self.request.user.email,
                # pull the email off the request
                json_data['email'],
                json_data['token'],
                lesson.seller.stripe_access_token,
                lesson.seller.stripe_user_id,
            )
            charge = stripe.Charge.create(
                amount=json_data['amount'],
                currency='usd',
                customer=customer.id,
                description=json_data['description'],
                application_fee=int(json_data['amount'] * fee_percentage),
                stripe_account=lesson.seller.stripe_user_id,
            )
            if charge:
                return JsonResponse({'status': 'success'}, status=202)
        except stripe.error.StripeError as e:
            return JsonResponse({'status': 'error'}, status=500)

# helpers

def get_or_create_customer(email, token, stripe_access_token, stripe_account):
    stripe.api_key = stripe_access_token
    connected_customers = stripe.Customer.list()
    for customer in connected_customers:
        if customer.email == email:
            print(f'{email} found')
            return customer
    print(f'{email} created')
    return stripe.Customer.create(
        email=email,
        source=token,
        stripe_account=stripe_account,
    )

# Create your views here.
