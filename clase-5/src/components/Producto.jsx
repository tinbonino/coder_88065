import { Link } from "react-router-dom"
function Producto({nombre,id,precio}) {
  return (
    <Link to={`/productos/${id}`} className="card">
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
    </Link>
  )
}

export default Producto