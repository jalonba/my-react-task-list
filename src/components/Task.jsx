function Task(props) {
  const { setTask, data } = props;
  console.log(data);

  return (
    <>
      <h2>{data.name}</h2>
      <p>{String(data.state)}</p>
      <button
        onClick={() => {
          setTask(data.id);
        }}
      >
        Update Task
      </button>
    </>
  );
}

export default Task;
