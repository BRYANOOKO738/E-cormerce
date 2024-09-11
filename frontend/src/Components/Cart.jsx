import React from "react";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../Redux/CartRedux";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_your_publishable_key"); // Replace with your Stripe publishable key

// Main component to export
const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm /> {/* CheckoutForm is used here */}
    </Elements>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const subtotal = cart.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = 5.96; // Example fixed shipping cost
  const shippingDiscount = 1.34; // Example fixed shipping discount
  const total = subtotal + shipping - shippingDiscount;

  return (
    <div className="mt-5">
      <h2>
        <b>Your Cart</b>
      </h2>
      <div className="row">
        <div className="col">
          <button className="btn btn-warning float-start">
            CONTINUE SHOPPING
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary float-end">CHECKOUT NOW</button>
        </div>
        <div className="mt-3 row">
          {cart.products.map((product) => (
            <div key={product._id} className="row col-md-9 mb-3">
              <div className="col float-start">
                <img
                  src={product.img}
                  className="rounded"
                  alt={product.title}
                  style={{ width: "150px", height: "150px" }} // Adjust size as needed
                />
              </div>
              <div className="col">
                <h5>
                  <b>Product:</b> {product.title}
                </h5>
                <p>
                  <b>ID:</b> {product._id}
                </p>
                <p>
                  <b>Color:</b> {product.color}
                </p>
                <p>
                  <b>SIZE:</b> {product.size}
                </p>
              </div>
              <div className="col float-end">
                <h3>
                  <b>QUANTITY</b>
                </h3>
                <button
                  className="btn btn-success mx-2"
                  onClick={() => handleDecrease(product._id)}
                >
                  <b>-</b>
                </button>
                <span>{product.quantity}</span>
                <button
                  className="btn btn-success mx-2"
                  onClick={() => handleIncrease(product._id)}
                >
                  <b>+</b>
                </button>
                <h4>${product.price * product.quantity}</h4>{" "}
                {/* Display the total for the product */}
              </div>
            </div>
          ))}
          <div className=" col-md-3 border align-items-md-baseline rounded border-danger mb-3 ">
            <h3 className="text-danger">
              <b>ORDER SUMMARY</b>
            </h3>
            <div className="row">
              <div className="col">
                <h4 className="float-start">
                  <b>Subtotal</b>
                </h4>
              </div>
              <div className="col">
                <p className="float-end">
                  <b>${subtotal.toFixed(2)}</b>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="float-start">
                  <b>Estimated shipping</b>
                </h4>
              </div>
              <div className="col">
                <p className="float-end">
                  <b>${shipping.toFixed(2)}</b>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="float-start">Shipping discount</h4>
              </div>
              <div className="col">
                <p className="float-end">${shippingDiscount.toFixed(2)}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <h4 className="float-start">
                  <b>Total</b>
                </h4>
              </div>
              <div className="col">
                <p className="float-end">
                  $<b>{total.toFixed(2)}</b>
                </p>
              </div>
            </div>
            <button className="btn btn-success">Check OUT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
