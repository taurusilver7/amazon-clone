import React from "react";
import "./CheckoutProduct.css";

import { useStateValue } from "../../context/StateProvider";

const CheckoutProduct = ({ id, title, image, rating, price, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />

      <div className="checkoutProduct__info">
        <h2 className="checkoutProduct__title">{title}</h2>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        {!hideButton && (
          <button className="checkoutProduct__btn" onClick={removeFromCart}>
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
