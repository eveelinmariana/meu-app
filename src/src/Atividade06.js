
import React from "react";
import { Link } from "react-router-dom";
import  JogoMemoria from "./Componente/JogoMemoria/JogoMemoria.jsx"

export default function Atividade04() {
  return (
    <>
      <h1>Atividade Contador </h1>
    
      < JogoMemoria/>
      
      <Link to="/">Retornar</Link>
    </>
  );
}
