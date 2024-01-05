/* eslint-disable react/prop-types */

import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
      setError("");
    } else {
      setError("Task cannot be empty");
    }
  };

  return (
    <div className={styles.form_content}>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      {error && (
        <div className={styles.error_wrapper}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
