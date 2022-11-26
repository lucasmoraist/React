import React from "react";
import styled from "styled-components";

export const Footer = styled.div`
    #gmail{
        position: absolute;
        width: 55px;
        height: 27.55px;
        left: 130px;
        top: 870px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: underline;

        color: #fff;
        text-decoration: none;
    }

    #link{
        position: absolute;
        width: 73px;
        height: 27.55px;
        right: 1608px;
        top: 870px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: underline;

        color: #fff;
        text-decoration: none;
    }

    #git{
        position: absolute;
        width: 68px;
        height: 27.55px;
        right: 1670px;
        top: 900px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: underline;

        color: #FFFFFF;
        text-decoration: none;
    }
`

export default function Rodape(){
    return(
        <Footer>
            <a id="gmail" href="mailto:luksmnt1101@gmail.com">Gmail</a>
            <a id="link" href="https://www.linkedin.com/in/lucas-morais-152672219/">LinkedIn</a>
            <a id="git" href="https://github.com/lucasmoraist">GitHub</a>
        </Footer>
    )
}