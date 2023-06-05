import React from "react";

function TareasCompletadas({ tareasCompletadas }) {
  return (
    <div>
      <h2>Tareas Completadas Exitosamente</h2>
      <ul>
        {tareasCompletadas.map((tarea, index) => (
          <li key={index}>{tarea.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default TareasCompletadas;
