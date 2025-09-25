import { addDoc, collection, getFirestore } from "firebase/firestore"


function CreateItem() {

    const item={
        title: "Remera",
        description: "Remera manga corta",
        categoryId: "indumentaria",
        imagenId: "remera.jpg",
        price: 15000,
        stock: 50
    }

    // conectamos con la db

    const db = getFirestore();

    // Referenciamos la colección

    const itemCollection = collection(db,"items")

    // Agregamos el item a la collection

    addDoc(itemCollection,item).then(({id})=>{
        console.log(id);
        console.log("Producto Agregado bien")
    })

    return (
    <div>createItem</div>
  )
}

export default CreateItem