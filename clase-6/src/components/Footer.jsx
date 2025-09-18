import { useContext } from "react"
import ThemeContext from "./context"

function Footer() {
    const {temaActual}=useContext(ThemeContext);
  return (
    <div style={{background:temaActual.background, color:temaActual.font}}>
        <h3>Todos los derechos reservados ® </h3>
    </div>
  )
}

export default Footer