import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import "./Product.css";

export const Product = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
