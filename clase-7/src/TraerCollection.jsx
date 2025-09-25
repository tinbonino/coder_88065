import { collection, getDocs,getFirestore } from "firebase/firestore"
import { useEffect } from "react"

function TraerCollection() {

    useEffect(() => {
      const db=getFirestore()
        //Creamos la referencia a la collection
        const itemCollection = collection(db,"items")

        //Traemos los datos
        getDocs(itemCollection).then(snapshot=>snapshot.docs.map(item=>
        {
            console.log(item)
            console.log(item.data())

            console.log(item.id)
        }
        ))

    },[])

  return (
    <div>TraerCollection</div>
  )
}

export default TraerCollection