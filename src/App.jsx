import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <label className={styles.checkboxLabel}>
        <div>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </div>
        Show Completed Tasks
      </label>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
