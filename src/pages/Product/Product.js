import React from "react";
import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "../../hooks/useTitleColorContext";
import "./Product.css";

export const Product = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
