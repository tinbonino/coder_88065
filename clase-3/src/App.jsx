import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClicksCounter from './components/ClicksCounter';
import MainButtons from './components/MainButtons';
import EjemploUseEffect from './components/EjemploUseEffect';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'

function App() {
  const [count, setCount] = useState(0) // Siempre devuelve dos elementos: el estado y la función que lo modifica
//       estado  funcion     valor inicial
//            actualizadora


  return (
    <>
       <div className="card">
        {/* <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <ClicksCounter/>
         */}
         {/* <MainButtons/> */}
         {/* <EjemploUseEffect/> */}
         <ItemListContainer/>
      </div>
 
    </>
  )
}

export default App
