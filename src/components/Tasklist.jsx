import { useState } from "react";
import Task from "./Task";

const inicialData = [
  { id: 1, name: "Task One", state: true },
  { id: 2, name: "Task two", state: true },
  { id: 3, name: "Task three", state: true },
  { id: 4, name: "Task four", state: true },
  { id: 5, name: "Task five", state: true },
];

function Tasklist() {
  const [myList, setMyList] = useState(inicialData);

  const setTask = (id) => {
    if (id) {
      const auxiliarList = myList.map((task) => {
        if (task.id === id) {
          return { ...task, state: !task.state };
        } else {
          return task;
        }
      });

      setMyList(auxiliarList);
    }
  };
  return (
    <>
      {myList.map((task) => (
        <Task data={task} setTask={setTask} />
      ))}
    </>
  );
}

export default Tasklist;
