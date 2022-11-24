import React, { useState } from "react";
import styled from "styled-components";

export const DivCalc = styled.div`
    margin: 0;
    padding: 0;

    #fundo{
        position: absolute;
        background-color: rgba(0,0,0,0.8);
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 15px;
        padding: 15px;
        color: #ffffff;
    }

    button{
        width: 50px;
        height: 50px;
        font-size: 25px;
        cursor: pointer;
        background-color: rgb(31,31,31);
        border: none;
        color: #ffffff;
        margin: 1px;
    }

    #zero{
        width: 106px;
    }

    button:hover{
        background-color: black;
    }

    #resultado{
        background-color: #ffffff;
        width: 216px;
        height: 30px;
        margin: 5px;
        color: #000;
        text-align: right;
        font-size: 25px;
    }

`
export default function Calculadora(){

    const [num, setNum] = useState(0);

    function insertNum(e){
        setNum(e.target.value);
    }
    
    return(
        <DivCalc>
        <div id="fundo">
            <p id="resultado">{num}</p>
            <table>
                <tr>
                    <td><button>C</button></td>
                    <td><button>+/-</button></td>
                    <td><button>%</button></td>
                    <td><button>/</button></td>
                </tr>

                <tr>
                    <td><button onClick={insertNum} value={7}>7</button></td>
                    <td><button onClick={insertNum} value={8}>8</button></td>
                    <td><button onClick={insertNum} value={9}>9</button></td>
                    <td><button>X</button></td>
                </tr>

                <tr>
                    <td><button onClick={insertNum} value={4}>4</button></td>
                    <td><button onClick={insertNum} value={5}>5</button></td>
                    <td><button onClick={insertNum} value={6}>6</button></td>
                    <td><button>-</button></td>
                </tr>
                
                <tr>
                    <td><button onClick={insertNum} value={1}>1</button></td>
                    <td><button onClick={insertNum} value={2}>2</button></td>
                    <td><button onClick={insertNum} value={3}>3</button></td>
                    <td><button>+</button></td>
                </tr>

                <tr>
                    <td colSpan="2"><button id="zero" onClick={insertNum} value={0}>0</button></td>
                    <td><button>,</button></td>
                    <td><button>=</button></td>
                </tr>
            </table>
        </div>
        </DivCalc>
    )
}