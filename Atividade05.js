
import React from "react";
import { Link } from "react-router-dom";
import  Calculadora from "./Componente/Calculadora/Calculadora.jsx"

export default function Atividade04() {
  return (
    <>
      <h1>Atividade Contador </h1>
    
      < Calculadora/>
      
      <Link to="/">Retornar</Link>
    </>
  );
}
