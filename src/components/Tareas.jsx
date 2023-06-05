import React from "react";
import TareasCompletadas from "./TareasCompletadas";
import { useTareas } from "../hooks/useTareas";

function Tareas() {
  const {
    agregarTarea,
    completarTarea,
    eliminarTarea,
    tareas,
    tareasCompletadas,
  } = useTareas();

  return (
    <div>
      <h2 style={{ color: "green" }}>Detalle de Lista de Tareas:</h2>
      <div>
        <h2>Tareas Pendientes</h2>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}
              <button onClick={() => completarTarea(index)}>Completada</button>

              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
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
          <button>Agregar Nueva Tarea</button>
        </form>
      </div>
      <TareasCompletadas tareasCompletadas={tareasCompletadas} />
    </div>
  );
}

export default Tareas;
