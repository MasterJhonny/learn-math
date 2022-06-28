import React, { useState } from 'react';


function LadoA({state, ope, setOpe }) {

    function changeOpe (valor, signo) {
        setOpe(signo)
        swal(valor, `Elijio la operacion de la ${valor.substr(0,valor.length - 1)}.`, "success");
    }

    return (
        <div className="lado">
            <details className="title btn-ope">
                <summary>Operación</summary>
                <button 
                    className="title btn"
                    onClick={() => changeOpe('Sumar', '+')}
                >Suma</button>
                <button 
                    className="title btn"
                    onClick={() => changeOpe('Restar', '-')}
                >Resta</button>
            </details> 
            <div className="">
                <div className="ope-up">
                    <p className="number">{state.numerador}</p>
                    <p className="number">{state.denominador}</p>
                    <span className="signo">{ope}</span>
                </div>
                <hr />
                <span className="number">
                    {
                        state.result === 0 ? '?':
                        state.result
                    }
                </span>
            </div>
        </div>
    );
}

export {LadoA};