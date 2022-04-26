import React from "react";
import { useCounterContext } from "../../hooks/useCounterContext";
import "./Product.css";

export const Product = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
