import React from "react";
import TaskList from "../components/TaskList";

function HomePage() {
  return (
    <div>
      <h1>Bienvenido a: My Task List </h1>
      <TaskList showDescription={true} />
    </div>
  );
}

export default HomePage;
