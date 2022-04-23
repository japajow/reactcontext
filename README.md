## React sobre context Udemy

- Criando 3 paginas
- Criando navbar e colocando 3 links nele
- Colocando estilo no navbar
  feito

## Criando o contexto

- Primeiramente vamos ter que criar o COntext
- O arquivo deve sempre ter a primeira letra maiuscula no nome, e geralmente termina em Context : SomeContext.js
- A convencao e deixar na pasta context em src
- Onde vamos utilizar o valor do contexto, o arquivo precisa ser importado

Criando uma pasta context/CounterContext.js

```tsx
import { createContext, useState } from "react";

// Criando o contexto
export const CounterContext = createContext();
```

## Criando o provider

- O Provider vai delimitar onde o contexto e utilizado
- Vamos criar uma especie de componente com a prop children
- Este Provider deve encapsular os demais componentes em que precisamos consultar ou alterar o valor
- Geralmente ele fica em App.js ou index.js
- Agora poderemos compartilharo valor de contexto em todos os componentes

```tsx
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
```

agora vamos encapsular quem queremos usar o contexto
index.js

```tsx
import { CounterContextProvider } from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);
```

Vamos na Home.js e chamar o contexto

```tsx
//importamos o useContext
import { useContext } from "react";

//importamos o nosso countercontext
import { CounterContext } from "../../context/CounterContext";

// agora destruturamos o counter no useContext passando o CounterContext como parametro
const [counter, setCounter] = useContext(CounterContext);


//ficando assim 
import React from "react";
import "./Home.css";

import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};
```
