import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    div{
        position: absolute;
        width: 430px;
        height: 976px;
        left: 0px;
        top: -15px;
        background: linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.989583) 0.01%, #686868 36.98%, #000000 100%);
    }

    #home{
        box-sizing: border-box;

        position: absolute;
        width: 430px;
        height: 48.21px;
        left: 0px;
        top: 278.18px;

        background: #000000;
        color: #FFFFFF;
        
        text-decoration: none;
        text-align: center;

        font-weight: 700;
        font-size: 16px;
        line-height: 45px;
    }

    #calculadora{
        box-sizing: border-box;

        position: absolute;
        width: 430px;
        height: 48.21px;
        left: 0px;
        top: 333.27px;

        background: #000000;
        color: #FFFFFF;
        
        text-decoration: none;
        text-align: center;

        font-weight: 700;
        font-size: 16px;
        line-height: 45px;
    }
`

export default function Menu(){
    return(
        <Nav>
            <div>
                <Link id="home" to="/">Home</Link>
                <Link id="calculadora" to="/calculadora">Calculadora</Link>
            </div>
        </Nav>
    )
}