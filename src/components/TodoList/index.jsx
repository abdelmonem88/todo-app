/* eslint-disable react/prop-types */
import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ tasks, deleteTask, toggleTask, editTask }) => {
  return (
    <div className={styles.listContainer}>
      {tasks.length < 1 ? (
        <div className={styles.no_tasks}>
          <p>No tasks yet!!</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
