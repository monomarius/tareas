import Header from "./components/Header"
import Tareas from "./components/Tareas"
import { useState } from "react"

function App() {
  

  const [tareas, setTareas] = useState([
    {
        id: 1,
        texto: 'Ir al cine',
        fecha: '29 noviembre, 2022',
        terminada: true
    },
    {
        id: 2,
        texto: 'Ir por taquitos al pastor',
        fecha: '30 noviembre, 2022',
        terminada: false
    },
    {
        id: 3,
        texto: 'Comprar el súper',
        fecha: '1 diciembre, 2022',
        terminada: false
    }
])

  return (
      <div className='container'>
       <Header titulo='Tareas' />
       <Tareas tareas={tareas} />
      </div>
  )
  }

export default App
