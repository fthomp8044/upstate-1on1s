import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


class CheckoutForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      visible: false
    }

    this.handlePayment = this.handlePayment.bind(this);
    this.togglePaymentDisplay = this.togglePaymentDisplay.bind(this);
  }

  componentDidMount() {

    axios.get(`/api/v1/lessons/${this.props.match.params.slug}/`)
    .then(res => this.setState(res.data))
    .catch(error => console.log(this.error));
  }

  togglePaymentDisplay() {
    this.setState(state => ({
     visible: !state.visible
   }));
  }

  async handlePayment(e) {
    e.preventDefault();
    // you need to get the email of the logged in user
    let {token} = await this.props.stripe.createToken({email: "freddy@example.com"});
    let response = await axios.post(`/api/v1/lessons/charge/`, JSON.stringify({
      token: token.id,
      email: token.email,
      // 13900 equals 139.00 without * 100 added (decimal places)
      amount: 13900 * 100,
      description: 'lesson description',
      lesson_id: '1',
    }));

    if(response.data.status === 'success') console.log("Purchase Complete!");

  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.visible && <React.Fragment><CardElement /><button type='buton' onClick={this.handlePayment}>Pay</button></React.Fragment>}
        </div>
        {!this.state.visible && <button type='button' onClick={this.togglePaymentDisplay}>Pay ${this.state.price} with Card</button>}
      </React.Fragment>
    )
  }
}

export default injectStripe(CheckoutForm);
