import React from "react";
import styled from "styled-components";

export const DivCalc = styled.div`
    margin: 0;
    padding: 0;

    #fundo{
        position: absolute;
        background-color: black;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 15px;
        padding: 15px;
    }
`

export default function Calculadora(){
    return(
        <DivCalc>
        <div id="fundo">
            <p id="resultado"></p>
            <table>
                <tr>
                    <td><button>C</button></td>
                    <td><button>+/-</button></td>
                    <td><button>%</button></td>
                    <td><button>/</button></td>
                </tr>

                <tr>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button>X</button></td>
                </tr>

                <tr>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button>-</button></td>
                </tr>
                
                <tr>
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button>+</button></td>
                </tr>

                <tr>
                    <td colSpan="2"><button>0</button></td>
                    <td><button>,</button></td>
                    <td><button>=</button></td>
                </tr>
            </table>
        </div>
        </DivCalc>
    )
}