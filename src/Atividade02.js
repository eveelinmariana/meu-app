import React from "react";
import { Link } from "react-router-dom";
import AnimacaoFrase from "./Componente/AnimacaoFrase/AnimacaoFrase.jsx";

function Atividade02() {
  return (
    <>
      <h1>Atividade Letreiro</h1>
      <AnimacaoFrase />
      <Link to="/">Retornar</Link>
    </>
  );
}

export default Atividade02;
