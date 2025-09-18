import { useState } from 'react'
import ThemeContext, {tema} from './components/context'
import Body from './components/Body'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import RenderCondicional from './components/RenderCondicional'

import './App.css'

function App() {
  const [temaActual, setTemaActual] = useState(tema.claro);

  const handleTema = () => {
    temaActual===tema.oscuro?
    setTemaActual(tema.claro):
    setTemaActual(tema.oscuro)
  }

  return (
    <>
      <ThemeContext.Provider value={{temaActual,handleTema}}>
          <Layout>
              <Navbar/>
              <Body/>
              <Footer/>
          </Layout>
      </ThemeContext.Provider>
      <RenderCondicional/>

    </>
  )
}

export default App
