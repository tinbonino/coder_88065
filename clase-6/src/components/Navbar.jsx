import { useContext } from "react"
import ThemeContext from "./context"
function Navbar() {

    const {temaActual,handleTema}=useContext(ThemeContext);

  return (
    <div>
        <button onClick={handleTema} style={{background:temaActual.background,color:temaActual.font}}>Cambiar tema</button>
    </div>
  )
}

export default Navbar