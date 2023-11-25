import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="contenedorPrincipal">
<Header/>
<h1 style={{color:"white", fontSize:"80px", margin:"0", padding:"0", marginTop:"1.5em"}}>TODO LIST</h1>
<Main/>
<Footer/>
    </div>
  )
}

export default App
