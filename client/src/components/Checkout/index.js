import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  return (
    <StripeProvider apiKey="pk_test_51H2XOsGP4bG3BNnqIuJs1B3aTgxkO5WB9lgYI9Szn7sfNcwYq24XuOh4zuYIECpbYAcRhIzwdo7HSbrb59cj2rwS00G9CnMEz5">
      <Elements>
        <CheckoutForm selectedProduct={{ price: 200 }} />
      </Elements>
    </StripeProvider>
  );
};

export default Checkout;
