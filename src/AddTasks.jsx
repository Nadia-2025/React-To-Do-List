import "./AddTask.css";

const AddTasks = ({
  handleOnChange,
  tasks,
  handleKeyDown,
  handleMouseEnter,
  handleMouseLeave,
  taskIndex,
  handleOnClick,
  handleToggle,
}) => {
  return (
    <>
      <div className="task-container">
        <h1 className="">To Do List</h1>

        <input
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          type="text"
          className="form-control mt-5"
          placeholder="Add your task here"
        />
        {tasks.length === 0 ? (
          <div className="alert alert-danger mt-3" role="alert">
            No hay tareas, añadir tareas!
          </div>
        ) : (
          <ul className="list-group mt-5">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  onClick={() => handleToggle(index)}
                  className={task.finished ? "finished" : null}
                >
                  {task.texto}
                </span>

                {taskIndex === index ? (
                  <button
                    onClick={() => handleOnClick(index)}
                    type="button"
                    className="btn-close fs-6"
                    aria-label="Close"
                  ></button>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AddTasks;
