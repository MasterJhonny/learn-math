import React, { useState } from 'react';


import { Bol } from '../components/Bol'




function LadoB({state, ope}) {

    const numerador = [];
    const denominador = [];
    const result = [];

    for (let i = 0; i < state.numerador; i++) {
        numerador.push(<Bol key={i}/>);   
    }
    for (let i = 0; i < state.denominador; i++) {
        denominador.push(<Bol key={i}/>);   
    }
    
    for (let i = 0; i < state.result; i++) {
        result.push(<Bol key={i}/>);   
    }

    return (
        <div className="lado">
            <h2 className="title">Grafico</h2>
            <div className="operacion">
                <div className="ope-up">
                    <p className="number box-figure">
                        {
                            numerador.map(item => item)
                        }
                    </p>
                    <p className="number box-figure">
                        {
                            denominador.map(item => item)
                        }
                    </p>
                    <span className="signo">{ope}</span>
                </div>
                <div className="result">
                    <hr />
                    <span className="number box-result">
                       {
                            result.map(item => item)
                       }
                    </span>
                </div>
            </div>
        </div>
    );
}

export {LadoB};