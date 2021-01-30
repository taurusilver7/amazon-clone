import React from "react";
import "./Product.css";

const Product = ({ title, image, rating, price }) => {
  return (
    <div className="product">
      <div className="info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_,i) => (
                <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt={title}
      />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
