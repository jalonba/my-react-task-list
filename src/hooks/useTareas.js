import { useState, useEffect } from "react";

export function useTareas() {
  const [tareas, setTareas] = useState([]);
  const [tareasCompletadas, setTareasCompletadas] = useState([]);
  const [tareasLocalStorage, setTareasLocalStorage] = useState(
    JSON.parse(localStorage.getItem("tareasLocalStorage")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "tareasLocalStorage",
      JSON.stringify({ tareas, tareasCompletadas })
    );
  }, [tareas, tareasCompletadas]);

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

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  useEffect(() => {
    if (tareasLocalStorage) {
      setTareas(tareasLocalStorage.tareas || []);
      setTareasCompletadas(tareasLocalStorage.tareasCompletadas || []);
    }
  }, [tareasLocalStorage]);

  return {
    agregarTarea,
    completarTarea,
    eliminarTarea,
    tareas,
    tareasCompletadas,
  };
}
