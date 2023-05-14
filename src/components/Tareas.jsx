import React, { useState, useEffect } from "react";
import TareasCompletadas from "./TareasCompletadas";

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [tareasCompletadas, setTareasCompletadas] = useState([]);
  const [tareasLocalStorage, setTareasLocalStorage] = useState(
    JSON.parse(localStorage.getItem("tareasLocalStorage")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "tareasLocalStorage",
      JSON.stringify(tareasLocalStorage)
    );
  }, [tareas, tareasCompletadas, tareasLocalStorage]);

  const agregarTarea = (nombre) => {
    const nuevaTarea = { nombre, completada: false };
    setTareas([...tareas, nuevaTarea]);
  };

  const completarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = true;
    const tareaCompletada = nuevasTareas.splice(index, 1)[0];
    setTareas(nuevasTareas);
    setTareasCompletadas([...tareasCompletadas, tareaCompletada]);
  };

  useEffect(() => {
    localStorage.setItem(
      "tareasLocalStorage",
      JSON.stringify({ tareas, tareasCompletadas })
    );
  }, [tareas, tareasCompletadas]);

  useEffect(() => {
    if (tareasLocalStorage) {
      setTareas(tareasLocalStorage.tareas || []);
      setTareasCompletadas(tareasLocalStorage.tareasCompletadas || []);
    }
  }, [tareasLocalStorage]);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <h2>Tareas Pendientes</h2>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}
              <button onClick={() => completarTarea(index)}>Completada</button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            agregarTarea(event.target.nuevaTarea.value);
            event.target.nuevaTarea.value = "";
          }}
        >
          <input name="nuevaTarea" />
          <button>Agregar Tarea</button>
        </form>
      </div>
      <TareasCompletadas tareasCompletadas={tareasCompletadas} />
    </div>
  );
}

export default Tareas;
