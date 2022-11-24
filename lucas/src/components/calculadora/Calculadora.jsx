import React, { useState } from "react";
import styled from "styled-components";

export const DivCalc = styled.div`
    margin: 0;
    padding: 0;

    #fundo{
        position: absolute;
        background-color: #000;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 30px;
        padding: 15px;
        color: #ffffff;
    }

    button{
        border-radius: 30px;
        width: 50px;
        height: 50px;
        font-size: 25px;
        cursor: pointer;
        border: none;
        margin: 1px;
    }

    .operator{
        background-color: #f69906;
        color: #fff;
    }
    .other{
        background-color: #a0a0a0;
    }
    .number{
        background-color: #313131;
        color: #fff;
    }

    #zero{
        width: 106px;
        background-color: #313131;
        color: #fff;
    }
    #zero:hover{
        background-color: #000;
    }

    button:hover{
        background-color: #000;
        color: #fff;
    }

    #resultado{
        background-color: #ffffff;
        border-radius: 10px;
        width: 208px;
        height: 32px;
        margin: 5px;
        padding: 2px;
        color: #000;
        text-align: right;
        font-size: 25px;
    }

`
export default function Calculadora(){

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function insertNum(e){
        var input = e.target.value;
        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }

    function clear(e){
        setNum(0)
    }

    function porcen(){
        setNum(num/100);
    }

    function changeSign(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num));
        }
    }

    function resultado(){
        if(operator === "/"){
            setNum(parseFloat(oldNum)/parseFloat(num));
        } else if(operator === "X"){
            setNum(parseFloat(oldNum)*parseFloat(num));
        } else if(operator === "+"){
            setNum(parseFloat(oldNum)+parseFloat(num));
        } else if(operator === "-"){
            setNum(parseFloat(oldNum)-parseFloat(num));
        }
    }

    function operatorHandler(e){
        var operadorInput = e.target.value;
        setOperator(operadorInput);
        setOldNum(num);
        setNum(0);
    }
    
    return(
        <DivCalc>
        <div id="fundo">
            <p id="resultado">{num}</p>
            <table>
                <tr>
                    <td><button className="other" onClick={clear}>AC</button></td>
                    <td><button className="other" onClick={changeSign}>+/-</button></td>
                    <td><button className="other" onClick={porcen}>%</button></td>
                    <td><button className="operator" onClick={operatorHandler} value={"/"}>/</button></td>
                </tr>

                <tr>
                    <td><button className="number" onClick={insertNum} value={7}>7</button></td>
                    <td><button className="number" onClick={insertNum} value={8}>8</button></td>
                    <td><button className="number"onClick={insertNum} value={9}>9</button></td>
                    <td><button className="operator" onClick={operatorHandler} value={"X"}>X</button></td>
                </tr>

                <tr>
                    <td><button className="number" onClick={insertNum} value={4}>4</button></td>
                    <td><button className="number" onClick={insertNum} value={5}>5</button></td>
                    <td><button className="number" onClick={insertNum} value={6}>6</button></td>
                    <td><button className="operator" onClick={operatorHandler} value={"-"}>-</button></td>
                </tr>
                
                <tr>
                    <td><button className="number" onClick={insertNum} value={1}>1</button></td>
                    <td><button className="number" onClick={insertNum} value={2}>2</button></td>
                    <td><button className="number" onClick={insertNum} value={3}>3</button></td>
                    <td><button className="operator" onClick={operatorHandler} value={"+"}>+</button></td>
                </tr>

                <tr>
                    <td colSpan="2"><button id="zero" onClick={insertNum} value={0}>0</button></td>
                    <td><button className="number" onClick={insertNum} value={"."}>,</button></td>
                    <td><button className="operator" onClick={resultado}>=</button></td>
                </tr>
            </table>
        </div>
        </DivCalc>
    )
}