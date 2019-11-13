from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, viewsets, views
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
# from django.views.generic.base import
from rest_framework.views import APIView

from accounts.models import Profile
from .serializers import ProfileSerializer, OrderSerializer
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


class ProfileRetrieveAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class AthleteProfileView(views.APIView):
    model = Profile
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def get(self, request):
        profile = get_object_or_404(Profile, user=request.user.id)
        serializer = ProfileSerializer(profile, many=False)
        return Response(serializer.data)


class ProfileList(generics.ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        selection = self.kwargs['selection']
        return Profile.objects.filter(lessons=selection)

#--------Stripe APIView--------/
class OrderDetailView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsOwnerOrReadOnly,)

    def get_object(self):
        try:
            order = Order.objects.get(user=self.request.user, ordered=false)
            return order
        except ObjectDoesNotExist:
            return Response({'message': 'You do not have an active order'}, status=HTTP_400_BAD_REQUEST)

class PaymentView(APIView):
    def post(self, reuqest,  *args, **kwargs):
        order = Order.objects.get(user=self.request.user, ordered=False)
        form = PaymentForm(self.request.POST)
        userprofile = UserProfile.objects.get(user=self.request.user)
        token = request.data.get('stripeToken')
        # save = form.cleaned_data.get('save')
        # use_default = form.cleaned_data.get('use_default')
        save= False
        use_default = False

        if save:
            if userprofile.stripe_customer_id != '' and userprofile.stripe_customer_id is not None:
                customer = stripe.Customer.retrieve(
                    userprofile.stripe_customer_id)
                customer.sources.create(source=token)

            else:
                customer = stripe.Customer.create(
                    email=self.request.user.email,
                )
                customer.sources.create(source=token)
                userprofile.stripe_customer_id = customer['id']
                userprofile.one_click_purchasing = True
                userprofile.save()

        amount = int(order.get_total() * 100)

        try:

            if use_default or save:
                # charge the customer because we cannot charge the token more than once
                charge = stripe.Charge.create(
                    amount=amount,  # cents
                    currency="usd",
                    customer=userprofile.stripe_customer_id
                )
            else:
                # charge once off on the token
                charge = stripe.Charge.create(
                    amount=amount,  # cents
                    currency="usd",
                    source=token
                )

            # create the payment
            payment = Payment()
            payment.stripe_charge_id = charge['id']
            payment.user = self.request.user
            payment.amount = order.get_total()
            payment.save()

            # assign the payment to the order

            order_items = order.items.all()
            order_items.update(ordered=True)
            for item in order_items:
                item.save()

            order.ordered = True
            order.payment = payment
            order.ref_code = create_ref_code()
            order.save()

            return Response(status=HTTP_200_OK)

        except stripe.error.CardError as e:
            body = e.json_body
            err = body.get('error', {})
            messages.warning(self.request, f"{err.get('message')}")
            return Response({'message':f"{err.get('message')}"}, status=HTTP_400_BAD_REQUEST)

        except stripe.error.RateLimitError as e:
            # Too many requests made to the API too quickly
            messages.warning(self.request, "Rate limit error")
            return Response({'message': 'Rate limit error'}, status=HTTP_400_BAD_REQUEST)


        except stripe.error.InvalidRequestError as e:
            # Invalid parameters were supplied to Stripe's API
            messages.warning(self.request, "Invalid parameters")
            return Response({'message':"Invalid parameters"}, status=HTTP_400_BAD_REQUEST)

        except stripe.error.AuthenticationError as e:
            # Authentication with Stripe's API failed
            # (maybe you changed API keys recently)
            messages.warning(self.request, "Not authenticated")
            return Response({'message':"Not Authenticated"}, status=HTTP_400_BAD_REQUEST)

        except stripe.error.APIConnectionError as e:
            # Network communication with Stripe failed
            messages.warning(self.request, "Network error")
            return Response({'message':"Network error"}, status=HTTP_400_BAD_REQUEST)

        except stripe.error.StripeError as e:
            # Display a very generic error to the user, and maybe send
            # yourself an email
            return Response({'message':"Something went wrong. You were not charged. Please try again."}, status=HTTP_400_BAD_REQUEST)

        except Exception as e:
            # send an email to ourselves
            return Response({'message':"A serious error occurred. We have been notified."}, status=HTTP_400_BAD_REQUEST)

        return Response({'message':"Invalid data recevied"}, status=HTTP_400_BAD_REQUEST)

#
# class StudentAthleteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = StudentAthlete.objects.all()
#     serializer_class = StudentAthleteSerializer
