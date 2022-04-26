import React from "react";
//import { CounterContext } from "../../context/CounterContext";
import { ChangeContext } from "../../components/ChangeCounter/ChangeCounter";
import { useCounterContext } from "../../hooks/useCounterContext";
import "./Home.css";

export const Home = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeContext />
    </div>
  );
};
