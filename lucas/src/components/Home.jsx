import React from "react";
import styled from "styled-components";

export const Main = styled.div`
    margin-left: 0;
    padding: 0;
    margin-left: 10px;

    #sobre{
        position: absolute;
        width: 1196px;
        height: 285px;
        left: 526px;
        top: 20px;

        font-family: 'Kadwa';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 40px;
        text-align: justify;

    }

    #sobre h2{
        font-family: 'Kadwa';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 80px;
        text-decoration-line: underline;
    }

    #pessoal{
        position: absolute;
        width: 465px;
        height: 208px;
        left: 526px;
        top: 460px;

        font-family: 'Kadwa';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 40px;
    }

    #pessoal h2{
        font-family: 'Kadwa';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 80px;
        text-decoration-line: underline; 
    }

    #especifico{
        position: absolute;
        width: 491px;
        height: 267px;
        left: 1217px;
        top: 460px;

        font-family: 'Kadwa';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 40px;
    }

    #especifico h2{
        font-family: 'Kadwa';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 80px;
        text-decoration-line: underline; 
    }
`

export default function Home(){
    return(
        <Main>
            <div id="sobre">
                <h2>Sobre Mim</h2>
                <p>
                    <span>Meu nome é Lucas de Morais Nascimento Taguchi, e estou cursando a área de Análise e Desenvolvimento de Sistemas. </span>
                    Eu me vejo como uma pessoa muito ambiciosa que vai atrás do que quer independente das dificuldades e tempo. Procuro
                    sempre otimizar meu tempo para que assim eu possa ter um tempo só pra mim, ler, treinar, assistir, ouvir música
                    são coisas que gosto de fazer nesses meus momentos, eu acredito que ter esses meus momentos podem me ajudar tanto
                    como profissional, como pessoa, tendo esses meus momentos quando eu volto a fazer a tarefa que estava me estressando
                    meu corpo volta mais relaxado e muitas das vezes eu tiro ideias naquele meu tempo, assim, esse meu tempo tirado me ajuda 
                    resolver meus problemas e preservar a minha saúde mental.
                </p>
            </div>

            <div id="pessoal">
                <h2>Características pessoais</h2>
                <ul>
                    <li>Proativo</li>
                    <li>Imperativo</li>
                    <li>Ágil</li>
                    <li>Organizado</li>
                    <li>Engajado</li>
                </ul>
            </div>
            
            <div id="especifico">
                <h2>Conhecimentos específicos</h2>
                <ul>
                    <li>HTML/CSS/JS</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>React</li>
                    <li>Angular</li>
                </ul>
            </div>
        </Main>
    )
}