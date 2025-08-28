import { useState, useEffect } from "react"
function EjemploUseEffect() {
    const [count,setCount] = useState(0);
    const [titulo,setTitulo]= useState("");

    // useEffect que se ejecuta solo en el montaje del componente
    useEffect(() => {
      console.log("Primera vez que se renderiza el componente")
    },[])

    // useEffect que se ejecuta cuando se actualiza count

    useEffect(() => {
      console.log("Se renderizó count")
    },[count])
    
    
    useEffect(() => {
      console.log("Se renderizó titulo")
    },[titulo])

   
     console.log("Se renderizó el componente") 
  

  return (
    <div>
        <h2>{titulo}</h2>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Aumentar contrador</button>
        <button onClick={()=>setTitulo("Bienvenidos")}>Cambiar título</button>
    </div>
  )
}

export default EjemploUseEffect