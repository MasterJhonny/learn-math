import { useState } from 'react'


import './App.css'

import { LadoA } from './components/LadoA'
import { LadoB } from './components/LadoB'
import { BoxItem } from './components/BoxItem'

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function App() {
  const [state, setState] = useState({
    numerador: 3,
    denominador: 4,
    result: 0
  })

  function vienResult () {
    const r = state.numerador + state.denominador;
    if (r === state.result) {
      swal("Buen trabajo", `El resultado es Correcto ${state.numerador} + ${state.denominador} = ${r}`, "success");
    } else {
      swal("Error", `El resultado es Correcto ${state.numerador} + ${state.denominador} = ${r}, tú isiste ${state.numerador} + ${state.denominador} = ${state.result}`, "error");
    }
    setState({
      numerador: random(1, 7),
      denominador: random(1, 7),
      result: 0
    })
  }

  return (
    <div className="App">
      <LadoA state={state}/>
      <LadoB state={state}/>
      <BoxItem 
        state={state}
        updateBol={setState}
      />
      <button className="btn-compro" onClick={vienResult}>Comprobar</button>
    </div>
  )
}

export default App
