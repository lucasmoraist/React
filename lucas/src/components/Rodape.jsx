import React from "react";
import styled from "styled-components";

export const Footer = styled.div`
    *{
        padding-bottom: 10px;
    }

    h3{
        margin-left: 10px;
    }
    a{
        display: inline;
        margin: 10px;
        text-decoration: none;
        color: #fff;
        background-color: rgba(0, 42, 255,0.4);
        margin-left: 10px;
        border-radius: 30px;
        padding: 2px;
    }
    a:hover{
        background-color: #fff;
        color: rgb(0, 42, 255);
    }
`

export default function Rodape(){
    return(
        <Footer>
            <h3>By: Lucas de Morais Nascimento Taguchi</h3>
            <a href="https://www.linkedin.com/in/lucas-morais-152672219/">LinkedIn: Lucas Morais</a>
            <a href="https://github.com/lucasmoraist">GitHub: lucasmoraist</a>
            <a href="mailto:luksmnt1101@gmail.com">Email: Lucas Morais</a>
        </Footer>
    )
}