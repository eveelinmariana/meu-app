import React from "react";
import { Link } from "react-router-dom";
import Gallery from "./Componente/Aula05/Gallery.jsx"
import { Profile } from "./Componente/Aula05/Gallery.jsx";

export default function Atividade03() {
  return (
    <>
      <h1>Atividade Gallery </h1>
      <Profile />
      <Link to="/">Retornar</Link>
    </>
  );
}


