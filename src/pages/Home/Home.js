import React from "react";
import "./Home.css";

import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import { ChangeContext } from "../../components/ChangeCounter/ChangeCounter";

export const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeContext />
    </div>
  );
};
