import React from "react";
import "./Product.css";

import { useStateValue } from "../../context/StateProvider";

const Product = ({ id, title, image, rating, price }) => {
  const [state, dispatch] = useStateValue();

  // the dispatch action adds items to cart. i.e the state.
  // console.log("This is the cart >>>>", state);

  const addToCart = () => {
    // dispatch the item into the data layer.
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
