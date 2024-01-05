/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (editedTask.trim() !== "") {
      editTask(task.id, editedTask);
      setEditing(false);
    }
  };

  return (
    <div className={styles.itemContainer}>
      <div className="checkbox_wrapper">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
      </div>
      {isEditing ? (
        <>
          <input
            className={styles.edit_input}
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className={styles.save_button} onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={styles.taskText}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <button className={styles.edit_button} onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
      <button
        className={styles.delete_button}
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
