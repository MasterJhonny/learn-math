import React, { Component } from 'react'

const url = 'https://i.postimg.cc/sDW4Q8NN/bolas.png'

import { Bol } from './Bol'

function BoxItem({ state, updateBol, modalResult, forma}) {

    function increment () {
        updateBol({
            ...state,
            result: state.result + 1
        })
    }

    function decrement () {
        updateBol({
            ...state,
            result: state.result - 1
        })
    }

    function changeForma (forma) {
        updateBol({
            ...state,
            forma: forma
        })
        swal({
            text: `Se ha cambiado la forma a ${forma}.`,
        });
    }

    return (
        <div className="box">
            <div className="title figura-box">
                <details className="btn-ope">
                    <button className="btn" 
                        onClick={()=> changeForma('estrella')}>
                        <Bol forma='estrella'/>
                    </button>
                    <button className="btn" 
                        onClick={() => changeForma('redondo')}>
                        <Bol forma='redondo'/>
                    </button>
                    <button className="btn" 
                        onClick={() => changeForma('cuadrado')}>
                        <Bol forma='cuadrado'/>
                    </button>
                    <button className="btn" 
                        onClick={() => changeForma('manzana')}>
                        <Bol forma='manzana'/>
                    </button>
                    <button className="btn" 
                        onClick={() => changeForma('platano')}>
                        <Bol forma='platano'/>
                    </button>
                    <summary>Figura</summary>
                </details>
                <Bol forma={forma}/>
            </div>
            <div className="box-btn">
                {
                    state.result === 0 ? null :
                    <button className="btn btn__box" onClick={decrement}>-</button>
                }
                <button className="btn btn__box" onClick={increment}>+</button>
                <button className="btn-compro" onClick={modalResult}>Comprobar</button>
            </div>
        </div>
    );
}

export {BoxItem};