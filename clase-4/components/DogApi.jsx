import { useState } from "react";
function DogApi() {
    const [perro,setPerro] = useState("");

    const handleDog = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setPerro(data.message)
      })
      .catch(error=>console.error("Algo falló...,error"))
    }
  return (
    <div>
        <h1>Mirá un perro</h1>
        <button onClick={handleDog}>Dame un perro</button>
        {perro && <img src={perro}/>}
    </div>
  )
}

export default DogApi