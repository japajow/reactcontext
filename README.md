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