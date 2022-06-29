import { useState } from 'react'

import { verifyAdd, verifySubtract } from '../functions/verify'

import { LadoA } from './LadoA'
import { LadoB } from './LadoB'
import { BoxItem } from './BoxItem'


function Vien({ ope, setOpe }) {
  const [state, setState] = useState({
    numerador: 4,
    denominador: 3,
    result: 0,
    forma: 'redondo'
  })

  function modalResult () {
    if (ope === '+') {
      verifyAdd(state.numerador, state.denominador, state.result, state.forma, setState)
    }
    if (ope === '-') {
      verifySubtract(state.numerador, state.denominador, state.result, state.forma, setState)
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
        forma={state.forma}
        />
      <BoxItem 
        state={state}
        updateBol={setState}
        modalResult={modalResult}
        forma={state.forma}
      />
    </div>
  )
}

export {Vien};
