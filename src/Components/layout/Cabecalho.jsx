import { useState } from "react";
import Menu from "../Menu";

const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("Exemplo 2");
  };
  /* Exemplo 1 de gerenciamento de states aqui, definimos no useState um valor inicial (colocado entre os parênteses do useState), além de desestruturar o state em uma variável (titulo) e em uma função (setTitulo) que será responsável por atualizar este state/titulo */
  const [titulo, settitulo] = useState("Exemplo de state");

  const atualizarTitulo = () => {
    settitulo("Opa, o state do título foi alterado!");
  };

  return (
    <header>
      <button onClick={() => console.log("exemplo 1")}>Exemplo 1</button>
      <button onClick={exemplo2}>Exemplo 2</button>
      <hr />
      <h1 onClick={atualizarTitulo}>{titulo}</h1>
      <Menu />
    </header>
  );
};
export default Cabecalho;
