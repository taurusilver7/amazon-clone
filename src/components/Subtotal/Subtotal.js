import React from "react";
import "./Subtotal.css";

import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../../context/StateProvider";
import { getCartTotal } from "../../context/reducer";

const Subtotal = () => {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} //homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={(e) => history.push("/payment")}>Proceed to Buy</button>
    </div>
  );
};

export default Subtotal;
