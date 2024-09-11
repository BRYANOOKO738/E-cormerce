// StripePayment.js
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_your_publishable_key"); // Replace with your Stripe publishable key

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      // Fetch the client secret from the backend
      await fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000 }), // Amount in cents
      })
        .then((res) => res.json())
        .then((data) => data.clientSecret),
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "John Doe", // Replace with dynamic data as needed
          },
        },
      }
    );

    if (error) {
      console.error(error);
    } else if (paymentIntent.status === "succeeded") {
      setPaymentSuccess("Payment successful!");
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? "Processing…" : "Pay Now"}
      </button>
      {paymentSuccess && <p>{paymentSuccess}</p>}
    </form>
  );
};

export default StripePayment;
