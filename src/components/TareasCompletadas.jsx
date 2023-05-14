import React, { useState, useEffect } from "react";

function TareasCompletadas({ tareasCompletadas }) {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    if (tareasCompletadas) {
      setTareas(tareasCompletadas.filter((tarea) => tarea.completada));
    }
  }, [tareasCompletadas]);

  return (
    <div>
      <h2>Tareas Completadas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default TareasCompletadas;
