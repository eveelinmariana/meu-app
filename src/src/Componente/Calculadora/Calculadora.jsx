import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '+/-') {
      setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
    } else if (value === '%') {
      setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
    } else {
      setInput(input + value);
    }
  };

  const Buttons = () => {
    const buttons = [
      'AC', '+/-', '%', '/',
      '7', '8', '9', '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    return buttons.map((button) => (
      <button key={button} onClick={() => handleButtonClick(button)}>
        {button}
      </button>
    ));
  };

  return (
    <div className="calculadora">
      <div className="display">
        <input type="text" value={input} readOnly />
        <span className="result">{result}</span>
      </div>
      <div className="buttons">{Buttons()}</div>
    </div>
  );
};

export default Calculadora;
