import React from 'react'

function Bol({forma}) {

    const formas = {
        redondo: 'https://i.postimg.cc/QM09PkFD/bol.png',
        estrella: 'https://i.postimg.cc/pr2mNKR7/estrella.png',
        cuadrado: 'https://i.postimg.cc/fR1yjn4L/cuadrado.png',
        manzana: 'https://i.postimg.cc/fybMQB4p/manzana.png',
        platano: 'https://i.postimg.cc/q7MtvXdc/platano.png'
    }

    return (
        <div className="bol" style={{ backgroundImage: `url(${formas[forma]})`}}>
        </div>
    );
}

export {Bol};