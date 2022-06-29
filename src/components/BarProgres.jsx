import Reac, { useState, useEffect } from 'react'

function BarProgres({progress}) {
    
    const w = `${(progress)*10}` 

    const style = {
        width: w + '%',
    }

    return (
        <div className="bar">
            <span className="progress" style={style}></span>
        </div>
    );
}

export {BarProgres};