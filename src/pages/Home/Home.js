import React from "react";
//import { CounterContext } from "../../context/CounterContext";
import { ChangeContext } from "../../components/ChangeCounter/ChangeCounter";
import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "../../hooks/useTitleColorContext";
import "./Home.css";

export const Home = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const {color, dispatch} = useTitleColorContext();

  const setTitleColor = (color) =>{
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeContext />
      <div>
        <button className="vermelho" onClick={()=> setTitleColor("RED")}>Vermelho</button>
        <button className="azul" onClick={()=> setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};
