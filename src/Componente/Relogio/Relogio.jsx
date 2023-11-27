import React, { useState, useEffect } from "react";
import "./Relogio.css";

export default function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date);

  const atualizarHora = () => {
    setHoraAtual(new Date);
  };

  useEffect(() => {
    const intervalId = setInterval(atualizarHora, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="relogio">
      {horaAtual.toLocaleTimeString()}
    </p>
  );
}
