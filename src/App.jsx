import React, { useState } from 'react'

import './App.css'

import { Vien } from './components/Vien'

function App() {

    const [ope, setOpe] = useState('+');

    return (
        <>
            <Vien ope={ope} setOpe={setOpe}/>
        </>
    );
}

export default App;