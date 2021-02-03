import React from "react";
import "./Payment.css";

import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { getCartTotal } from "../../context/reducer";

import CurrencyFormat from "react-currency-format";

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const history = useHistory();

  console.log("👱", user);

  const emptyCart = () => {
    dispatch({
      type: "EMPTY_CART",
      cart: [],
    });
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>

        {/* payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>23 Avenue</p>
            <p>Delhi, India</p>
          </div>
        </div>

        {/* payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items & Delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <CurrencyFormat
              renderText={(value) => <h3>Order Total: {value}</h3>}
              decimalScale={2}
              value={getCartTotal(cart)} //homework
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
            <button
              onChange={emptyCart}
              onClick={(e) => history.push("/orders")}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
