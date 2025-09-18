import { useState } from "react"
function RenderCondicional() {
    const [mostrar,setMostrar]=useState(false);

    const handleClick = () => {
      setMostrar(!mostrar);
    }

    const renderConIf = () => {
      if(mostrar){
        return <h2>Este texto se muestra si el estado es true con un if</h2>
      }
      return <h2>Este texto se muestra si el estado es false con un if</h2>
    }


  return (
    <div>
        <h3>Renderizando Condicionalmente</h3>
        <button onClick={handleClick}>{mostrar?"Ocultar":"Mostrar"}</button>
        {renderConIf()}
        {mostrar?
        <h2>Este texto se muestra si el estado es true con un ternario</h2>
        :<h2>Este texto se muestra si el estado es false con un ternario</h2>}
        {mostrar && <h2>Este texto se muestra si el estado es true con un &&</h2>}
        {(() => {
            if(mostrar){
                return <h2>Este texto se muestra si el estado es true con una funcion anonima autoinvocada</h2>
            }
            return <h2>Este texto se muestra si el estado es false con una funcion anonima autoinvocada</h2>
          
        })()}
    </div>
  )
}

export default RenderCondicional