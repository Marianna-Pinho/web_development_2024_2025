import { useState } from 'react'
// import './App.css'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Formulario/>
    </>
  )
}

export default App
