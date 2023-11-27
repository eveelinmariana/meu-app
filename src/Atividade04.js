
import React from "react";
import { Link } from "react-router-dom";
import  Contador from "./Componente/Contador/Contador.jsx"

export default function Atividade04() {
  return (
    <>
      <h1>Atividade Contador </h1>
    
      < Contador/>
      
      <Link to="/">Retornar</Link>
    </>
  );
}
