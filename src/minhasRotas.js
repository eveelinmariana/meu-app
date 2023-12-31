import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from"./Home";

import "./minhasRotas.css";

import Atividade01 from"./Atividade01";

import Atividade02 from "./Atividade02";

import Atividade03 from "./Atividade03";

import Atividade04 from "./Atividade04";

import Atividade05 from "./Atividade05";

import Atividade06 from "./Atividade06"; 

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Atividade01" element={<Atividade01 />} />
                    <Route path="/Atividade02" element={<Atividade02 />} />
                    <Route path="/Atividade03" element={<Atividade03 />} />
                    <Route path="/Atividade04" element={<Atividade04 />} />
                    <Route path="/Atividade05" element={<Atividade05 />} />
                    <Route path="/Atividade06" element={<Atividade06 />} /> 
                </Routes>
            </div>
        </BrowserRouter>
    );
}