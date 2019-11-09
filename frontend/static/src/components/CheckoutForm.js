import React, {Component} from 'react';
import {CardElement, injectStripe, Elements, StripeProvider} from 'react-stripe-elements';

import axios from 'axios';


class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: null,
      success: false,

  }
}

  async submit(ev)  {
    this.setState({ loading: true });
    let {token} = await this.props.stripe.createToken();
    axios.post(`api/v1/handle-payment`, {stripeToken: token.id})
    .then(res => {
      this.setState({ loading: false, success: true });
    }).catch(err => {
      this.setState({ loading: false, error: err });
    });
}

  render() {
    const { error, loading, success } = this.state;
    return (
        <div>
          {error && (
            <div>
              <p>Your payment was unsuccessful</p>
            </div>
          )}
          {success && (
            <div>
              <h1>Your payment was successful</h1>
              <p>
                Go to your <b>profile</b> to see the order delivery sta
              </p>
            </div>
          )}
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button
            loading={ loading }
            diabled={ loading }
            onClick={this.submit}
            style={{ marginTop: '10px' }}
            >
            Purchase
            </button>
          </div>
    );
  }
}

const InjectedForm = injectStripe(CheckoutForm);

const WrappedForm = () => (
  <StripeProvider apiKey="pk_test_VemRXrMocXpHvlA1Yrs65ueB00Kl63LAn4">
    <div className="example">
      <h1>React Stripe Elements Example</h1>
      <Elements>
      <InjectedForm/>
      </Elements>
    </div>
  </StripeProvider>
)

export default (WrappedForm);
