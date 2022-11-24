import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    a{
        text-decoration: none;
        background-color: rgba(0, 42, 255,0.4);
        color: #fff;
        margin-left: 10px;
        margin-right: 30px;
        border-radius: 30px;
        padding: 3px;
    }

    a:hover{
        background-color: #fff;
        color: rgb(0, 42, 255);
    }
`

export default function Menu(){
    return(
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/calculadora">Calculadora</Link>
        </Nav>
    )
}