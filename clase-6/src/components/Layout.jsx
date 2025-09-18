import { useContext } from "react";
import ThemeContext from "./context";

function Layout({children}) {

    const {temaActual} = useContext(ThemeContext);


  return (
    <div style={{background:temaActual.background, color:temaActual.font}}>
        {children}
    </div>
  )
}

export default Layout