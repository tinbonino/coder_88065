import { useParams } from "react-router-dom";
import productosGastronomicos from "../productos";
function Detalle() {

const {id} =useParams();
console.log("El id del producto es:",id);

const producto = productosGastronomicos.find(prod=>prod.id===parseInt(id));

if(!producto){
    return <h2>El producto seleccionado no existe</h2>
}

  return (
    <div>
        <h2>Detalle del producto</h2>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <h3>{producto.precio}</h3>
    </div>
  )
}

export default Detalle