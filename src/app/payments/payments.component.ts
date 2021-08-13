import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  strikeCheckout:any = null;

  constructor() { }

  ngOnInit() {
    this.stripePaymentGateway();
  }

  checkout(amount) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JIWzaACHAmPY6wB5zcrychaNuL9QpXRMN5oaBWkzPSowpgYDeoLvPOdXX5saOZJbAY4sYNJhjZG5ONpkTYe4i4s00dvFQlBoZ',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JIWzaACHAmPY6wB5zcrychaNuL9QpXRMN5oaBWkzPSowpgYDeoLvPOdXX5saOZJbAY4sYNJhjZG5ONpkTYe4i4s00dvFQlBoZ',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }

      window.document.body.appendChild(scr);
    }
  }

}




