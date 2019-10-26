from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.conf import settings # new
import stripe #new

stripe.api_key = settings.STRIPE_SECRET_KEY


class HomePageView(TemplateView):
    template_name = 'payments.html'

# We have used the publishable key to send the credit card information to Stripe, and Stripe has sent us back a token. But we haven't used the token yet to make a charge!
    def get_context_data(self, **kwargs): # New
        context = super().get_context_data(**kwargs)
        context['key'] = settings.STRIPE_PUBLISHABLE_KEY
        return context

# create a charge view that receives the token from Stripe, makes the charge, and then redirects to the charge page upon success.

def charge(request): # new
    if request.method == 'POST':
        charge = stripe.Charge.create(
            amount=500,
            currency='usd',
            description='A Django charge',
            source=request.POST['stripeToken']
        )
        return render(request, 'charge.html')


# The charge function-based view assumes a POST request: I am sending data to Stripe here. We make a charge that includes the amount, currency, description, and CRUICALLY the source which has the unique token Stripe generated for this transaction. Then I return the request object and load the charge.html template.
