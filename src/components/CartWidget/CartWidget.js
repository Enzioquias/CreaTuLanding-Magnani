import rest from "./assets/rest.png"
import cart from "./assets/shopping-cart.png";
import React, { useState } from "react";

const CartWidget = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>
        <img
          style={{ width: "1.5rem", height: "auto" }}
          src={cart}
          alt="cart-widget"
        ></img>{" "}
        {counter}
      </button>

      <button onClick={() => setCounter(counter - 1)}>
        <img
          style={{ width: "1.5rem", height: "auto" }}
          src={rest}
          alt="rest-from-cart"
        ></img>{" "}
      </button>
    </>
  );
};

export default CartWidget;
