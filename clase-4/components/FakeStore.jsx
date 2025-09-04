import { useEffect, useState } from "react";
import axios from "axios";
function FakeStore() {

    const [products,setProductos]=useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProductos(response.data)
            console.log("Primer render")
        }
        catch (error){
            console.error("Error al cargar los productos:",error)
        }
        
      }
      fetchProducts();
    },[])

  return (
    <div>
        <h2>Productos</h2>
        <ul style={{listStyle:"none",padding:0}}>
            {products.map((prod)=>(
                <li key={prod.id} style={{marginBottom:"2rem"}}>
                    <h3>{prod.title}</h3>
                    <p>${prod.price}</p>
                    <img src={prod.image} alt={prod.title} />
                </li>
            ))}

        </ul>
    </div>
  )
}

export default FakeStore