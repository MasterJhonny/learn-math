import React, { Component } from 'react'

const url = 'https://i.postimg.cc/sDW4Q8NN/bolas.png'



function BoxItem({ state, updateBol }) {

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

    return (
        <div className="box">
            <h2 className="title">figuras</h2>
            <p>
                <img src={url} className="box-img" alt="bolas" />
            </p>
            <div className="box-btn">
                {
                    state.result === 0 ? null :
                    <button className="btn" onClick={decrement}>-</button>
                }
                <button className="btn" onClick={increment}>+</button>
            </div>
        </div>
    );
}

export {BoxItem};