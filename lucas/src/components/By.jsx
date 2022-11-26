import React from "react";
import Lucas from './img/Lucas.JPG'
import styled from "styled-components";


export const Div = styled.div`
    img{
        position: absolute;
        width: 110px;
        height: 107px;
        left: 157px;
        top: 100px;
        border-radius: 100px;
    }
    h2{
        position: absolute;
        width: 125px;
        height: 28.53px;
        left: 170px;
        top: 195px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;
    }
`

export default function By(){
    return(
        <Div>
            <img src={Lucas}/>
            <h2>Lucas Morais</h2>
        </Div>
    )
}