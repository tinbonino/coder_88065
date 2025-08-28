import { useState } from "react"
function ClicksCounter() {
    const [contador,setContador]= useState(0);

    const handleClick =() => {
      setContador(contador+1)
      console.log("Se Clickeó el botón")
    }

  return (
    <div>
        <h2>Contemos Clicks!</h2>
        <h3>Clickeaste {contador} veces!</h3>
        <button onClick={handleClick}>Click!</button>
    </div>
  )
}

export default ClicksCounter