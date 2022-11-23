import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculadora from "../components/calculadora/Calculadora";
import Home from "../components/Home";

export default function MainRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/calculadora" element={<Calculadora/>}/>
            </Routes>
        </div>
    )
}