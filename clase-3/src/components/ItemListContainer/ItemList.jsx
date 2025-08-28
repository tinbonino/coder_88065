
import { useState } from "react";
import Item from "./Item";

const categories = {
  PANADERIA: "Panadería y Cereales",
  FRUTAS: "Frutas y Verduras",
  LACTEOS: "Lácteos"
};

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
    ? items.filter(item => item.categoria === selectedCategory)
    : items;

  return (
    <div>
      <div>
        <button onClick={() => setSelectedCategory(categories.PANADERIA)}>
          Panaderia y cereales
        </button>
        <button onClick={() => setSelectedCategory(categories.FRUTAS)}>
          Frutas y verduras
        </button>
        <button onClick={() => setSelectedCategory(categories.LACTEOS)}>
          Lacteos
        </button>
      </div>
      {filteredItems.map(item => (
        <Item
          key={item.id}
          nombre={item.nombre}
          precio={item.precio}
          descripcion={item.descripcion}
        />
      ))}
    </div>
  );
}

export default ItemList;
