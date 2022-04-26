import React, { useContext } from "react";
import { ChangeContext } from "../../components/ChangeCounter/ChangeCounter";
import { CounterContext } from "../../context/CounterContext";
import "./About.css";

export const About = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
