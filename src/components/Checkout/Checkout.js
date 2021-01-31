import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../context/StateProvider";

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        <div>
          {/*optional chaining is not null, but easier than a tri-catch block. a clean1 */}
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <div className="checkout__subtotalAd">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt="checkout_ad"
          />
          <br />
          <small>Your order is eligible for FREE delivery.</small>
          <br />
          <small>
            Select this option at checkout.
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200904360&pop-up=1"
              target="_blank"
              rel="noreferrer"
            >
              Details
            </a>
          </small>
        </div>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
