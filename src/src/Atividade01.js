import React from "react";
import { Link } from "react-router-dom";
import Relogio from "./Componente/Relogio/Relogio.jsx";

function Atividade01() {
  return (
    <>
      <h1>Atividade Relogio</h1>
      <Relogio />
      <Link to="/">Retornar</Link>
    </>
  );
}

export default Atividade01;
