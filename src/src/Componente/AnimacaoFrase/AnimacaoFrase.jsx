import React, { useState, useEffect } from "react";
import "./AnimacaoFrase.css";

export default function AnimacaoFrase() {
  const  frase  = "Conheça a Fatec!";
  const [fraseAtual, setFraseAtual] = useState("");
  const [indice, setIndice] = useState(0);
  const [estaRenderizando, setEstaRenderizando] = useState(true);

  useEffect(() => {
    const tamanhoFrase = frase.length;

    const temporizador = setInterval(() => {
      if (!estaRenderizando) {
        
        setIndice(0);
        setFraseAtual("");
        setEstaRenderizando(true);
      } else {
        if (indice === tamanhoFrase) {
          setEstaRenderizando(false);
        } else {
          setFraseAtual((fraseAnterior) => fraseAnterior + frase[indice]);
          setIndice((indiceAnterior) => indiceAnterior + 1);
        }
      }
    }, 500);

    return () => clearInterval(temporizador); 
  }, [indice, estaRenderizando, frase]);

  return <p className="slogan">{fraseAtual}</p>;
}
