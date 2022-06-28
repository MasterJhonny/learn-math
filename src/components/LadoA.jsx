import React, { useState } from 'react';

function LadoA({state}) {


    return (
        <div className="lado">
            <h2 className="title">Operacion</h2>
            <div className="">
                <div className="ope-up">
                    <p className="number">{state.numerador}</p>
                    <p className="number">{state.denominador}</p>
                    <span className="signo">+</span>
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