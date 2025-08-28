import "./App.css";
import AddTasks from "./AddTasks";
import { useState } from "react";
import "./assets/style.css";
import Fondo from "./Fondo";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskIndex, setTaskIndex] = useState(null);

  const handleOnChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTasks([...tasks, { texto: newTask, finished: false }]);
      e.target.value = "";
    }
  };
  const handleMouseEnter = (index) => {
    setTaskIndex(index);
  };

  const handleMouseLeave = () => {
    setTaskIndex(null);
  };

  const handleOnClick = (indexToDelete) => {
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  };
  const handleToggle = (indexToToggle) => {
    setTasks(
      tasks.map((task, index) =>
        index === indexToToggle ? { ...task, finished: !task.finished } : task
      )
    );
  };

  return (
    <>
      <Fondo></Fondo>
      <AddTasks
        handleOnChange={handleOnChange}
        handleKeyDown={handleKeyDown}
        tasks={tasks}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        taskIndex={taskIndex}
        handleOnClick={handleOnClick}
        handleToggle={handleToggle}
      ></AddTasks>
    </>
  );
}

export default App;
