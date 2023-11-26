import React from 'react'
import { useState, useEffect } from 'react'
import './Main.css'



function Tarea() {

    const [tareas, setTareas] = useState([
        { id: 1, texto: 'Hacer TPO React', completedo: false },
        { id: 2, texto: 'Entregar TPO en campus', completado: false }
    ])

    const [input, setInput] = useState('')

    const agregarTarea =(e)=>{
        e.preventDefault()
        const nuevaTarea = {id: Date.now(), texto: input, completado:false}
        setTareas([...tareas, nuevaTarea])
        setInput('')
    }

    const terminarTarea = (id) => {
        setTareas(
            tareas.map((tarea) => {
                if (tarea.id === id) {
                    return { ...tarea, completado: !tarea.completado }
                }
                return tarea
            })
        )
    }

    const eliminarTarea = (id) => {
        // const index = tareas.indexOf(id)
        
        setTareas(tareas.filter(tarea=> tarea.id != id))
        
    }

    return (
        <div className='contenedorLista'>
            <ul>
                {tareas.map((tarea) => (
                    <div>
                        <li key={tarea.id} style={{ textDecoration: tarea.completado ? "line-through" : "none" }}>{tarea.texto}</li>
                        <button onClick={() => terminarTarea(tarea.id)} >Terminado</button>
                        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>

                    </div>

                ))}
            </ul>
            <input type="text" placeholder='Escribir tarea' onChange={(e) => setInput(e.currentTarget.value)} />
            <button type='submit' onClick={agregarTarea}>Agregar</button>
        </div>
    )
}

export default Tarea