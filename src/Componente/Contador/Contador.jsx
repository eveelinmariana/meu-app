import React, { useState } from "react";
import "./Contador.css";
import mulher from "./imgs/mulher.png"
import homem from "./imgs/homem.png"
import mais from "./imgs/mais.png"
import menos from "./imgs/menos.png"
import resetar from './imgs/resetar.png'

const Contador = () => {
  const [contagemHomem, setContagemHomem] = useState(0);
  const [contagemMulher, setContagemMulher] = useState(0);

  const incrementarContagem = (tipo) => {
    if (tipo === "homem") {
      setContagemHomem(contagemHomem + 1);
    } else if (tipo === "mulher") {
      setContagemMulher(contagemMulher + 1);
    }
  };

  const decrementarContagem = (tipo) => {
    if (tipo === "homem" && contagemHomem > 0) {
      setContagemHomem(contagemHomem - 1);
    } else if (tipo === "mulher" && contagemMulher > 0) {
      setContagemMulher(contagemMulher - 1);
    }
  };

  const resetarContagens = () => {
    setContagemHomem(0);
    setContagemMulher(0);
  };

  const criarBotoes = (tipo) => (
    <div>
      <img className="ImgMais"
        src={mais}
        id={tipo + "Mais"}
        alt={`Incrementar ${tipo}`}
        onClick={() => incrementarContagem(tipo)}
      />
      <img className="ImgMenos"
        src={menos}
        id={tipo + "Menos"}
        alt={`Decrementar ${tipo}`}
        onClick={() => decrementarContagem(tipo)}
      />
    </div>
  );

  const criarContagem = (tipo, valor) => (
    <div key={tipo}>
      <label>{tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase()}</label>
      <input className="inputStyle" id={tipo + "Total"} value={valor} readOnly />
    </div>
  );

  return (
    <div className="contador">
      <div>
        <p>Total</p>
        <img className="resetImage" src={resetar} id="resetarTudo" alt="Resetar" onClick={resetarContagens} />
      </div>

      <input className="inputStyle" id="somaTotal" value={contagemHomem + contagemMulher} readOnly />

      <div className="avatares">
        <img className="avatarImg"
          src={homem}
          alt="Homem"
          onClick={() => incrementarContagem("homem")}
        />
        <img className="avatarImg"
          src={mulher}
          alt="Mulher"
          onClick={() => incrementarContagem("mulher")}
        />
      </div>

      <div className="Button">
        {criarBotoes("homem")}
        {criarBotoes("mulher")}
      </div>

      <div className="ContadorIndividual">
        {criarContagem("homem", contagemHomem)}
        {criarContagem("mulher", contagemMulher)}
      </div>
    </div>
  );
};

export default Contador;
