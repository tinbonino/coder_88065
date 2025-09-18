import { createContext } from "react";

export const tema ={
    claro:{
        font:"black",
        background:"white"
    },
    oscuro:{
        font:"white",
        background:"black"
    }
}

const ThemeContext = createContext(tema.claro);

export default ThemeContext