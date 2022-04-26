import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import "./ChangeContext.css";

export const ChangeContext = () => {
  const {counter,setCounter} = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
    </div>
  );
};
