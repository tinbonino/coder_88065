import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Error from './components/Error';
import Home from './components/Home';
import Layout from './components/Layout';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Detalle from './components/Detalle';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/productos/:id" element={<Detalle/>}/>
          <Route path="/*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
