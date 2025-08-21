import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    <>
     <Header/>
     <Body/>
     <Footer/>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    
    </>
  )
}

export default App
