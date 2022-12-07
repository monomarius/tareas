import Header from "./components/Header"
import Tareas from "./components/Tareas"
import { useState } from "react"
import AddTarea from "./components/AddTarea"

function App() {
  

  const [mostrarForm, setMostrarForm] = useState(false)
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
        texto: 'Ir al súper',
        fecha: '1 diciembre, 2022',
        terminada: false
    }
])

//Función de borrar una tarea pasada por Prop

const borrarTarea = (id) => {
  setTareas(tareas.filter((tarea) => tarea.id !== id))
}

//Función de cambiar el estatus de la tarea

const marcarTarea = (id) => {
  console.log(id)
  setTareas(tareas.map((tarea) => tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea))
}

//Agregar una tare

const agregarTarea = (tarea) => {
  console.log(tarea)
  const id = Math.floor(Math.random() * 10000) + 1
  const nuevaTarea = {id, ...tarea}

  setTareas([...tareas, nuevaTarea])
}


  return (
      <div className='container'>
        <Header titulo='Tareas' mostrarForm={mostrarForm} onAdd={()=> setMostrarForm(!mostrarForm)} />
        {mostrarForm && <AddTarea onAdd={agregarTarea} />}
        {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTarea} onToggle={marcarTarea} /> : 'No hay tareas que mostrar' }
      </div>
  )
  }

export default App
