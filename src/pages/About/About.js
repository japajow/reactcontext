import React from "react";
import { useCounterContext } from "../../hooks/useCounterContext";
import "./About.css";

export const About = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();
  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
