import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';

import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
class CheckoutForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      lesson:''
    }
    this.handlePayment = this.handlePayment.bind(this);
    this.togglePaymentDisplay = this.togglePaymentDisplay.bind(this);
  }
  componentDidMount() {
    // axios.get(`/api/v1/lessons/${this.props.match.params.slug}/`)
    // .then(res => this.setState(res.data))
    // .catch(error => console.log(this.error));
  }
  togglePaymentDisplay() {
    this.setState(state => ({
     visible: !state.visible
   }));
  }
  async handlePayment(e) {
    e.preventDefault();
    let {token} = await this.props.stripe.createToken({email: "sammy@example.com"});
    let response = await axios.post(`/api/v1/lessons/charge/`, JSON.stringify({
      token: token.id,
      email: token.email,
      // 13900 equals 139.00 without * 100 added (decimal places)
      amount: 7000,
      description: 'all star package',
      athlete_id: '2',
    }));
    if(response.data.status === 'success') console.log("Purchase Complete!");
  }
  render() {
    // 6 id of Cory Thompson
    return (
      <React.Fragment>
        <div className='checkout-content'>
          <h1 className='checkout-title'>Checkout</h1>
          <p>{this.state.lesson}</p>
          <h4>You Booked: All Star Package with Cory Thompson</h4>
          <p className='text-center'>Total: $80{this.state.price}</p>
          {this.state.visible && <React.Fragment><CardElement /><Button id='checkout-pay-button' type='buton' onClick={this.handlePayment}>Pay</Button></React.Fragment>}

        {!this.state.visible && <Button type='button' variant='contained' onClick={this.togglePaymentDisplay}>Pay {this.state.price} with Card</Button>}
        </div>
      </React.Fragment>
    )
  }
}
export default injectStripe(CheckoutForm);
