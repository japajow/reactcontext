import React from "react";
import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "../../hooks/useTitleColorContext";
import "./About.css";

export const About = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
