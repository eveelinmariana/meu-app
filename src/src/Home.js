import React from "react";
import { Link } from "react-router-dom";

const Home = () =>  {
    return (

        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atividade01">Atividade Relogio</Link>
                    </li>
                    <li>
                        <Link to="/Atividade02">Atividade Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atividade03">Atividade Aula07</Link>
                    </li>
                    <li>
                        <Link to="/Atividade04">Atividade Contador</Link>
                    </li>
                    <li>
                        <Link to="/Atividade05">Atividade Calculadora</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Home;