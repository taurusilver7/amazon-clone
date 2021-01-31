import React from "react";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Orders.css";

const Orders = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="orders">
      <h1> Your Orders</h1>
      <div className="orders__order">
        {user &&
          cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
              hideButton
            />
          ))}
      </div>
    </div>
  );
};

export default Orders;
