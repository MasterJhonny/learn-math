import { useState } from 'react'


import { LadoA } from './LadoA'
import { LadoB } from './LadoB'
import { BoxItem } from './BoxItem'

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


function verifyAdd (num, den, res, callback) {
  const r = num + den;
  if (r === res) {
    swal("Buen trabajo", `El resultado es Correcto ${num} + ${den} = ${r}`, "success");
  } else {
    swal("Error", `El resultado es Correcto ${num} + ${den} = ${r}, tú isiste ${num} + ${den} = ${res}`, "error");
  }
  callback({
    numerador: random(1, 7),
    denominador: random(1, 7),
    result: 0
  })
}

function verifySubtract (num, den, res, callback) {
  const r = num - den;
  if (r === res) {
    swal("Buen trabajo", `El resultado es Correcto ${num} - ${den} = ${r}`, "success");
  } else {
    swal("Error", `El resultado es Correcto ${num} - ${den} = ${r}, tú isiste ${num} - ${den} = ${res}`, "error");
  }
  callback({
    numerador: random(7, 14),
    denominador: random(1, 7),
    result: 0
  })
}


function Vien({ ope, setOpe }) {
  const [state, setState] = useState({
    numerador: 4,
    denominador: 3,
    result: 0
  })

  function modalResult () {
    if (ope === '+') {
      verifyAdd(state.numerador, state.denominador, state.result, setState)
    }
    if (ope === '-') {
      verifySubtract(state.numerador, state.denominador, state.result, setState)
    }
  }

  return (
    <div className="vien">
      <LadoA 
        state={state}
        setOpe={setOpe}
        ope={ope}
      />
      <LadoB 
        state={state}
        ope={ope}
        />
      <BoxItem 
        state={state}
        updateBol={setState}
        modalResult={modalResult}
      />
    </div>
  )
}

export {Vien};
