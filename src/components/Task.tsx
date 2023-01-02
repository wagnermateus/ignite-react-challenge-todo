import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { ChangeEvent, useState } from "react";

export interface TaskProps {
  content: string;
  status: "todo" | "done";
}
interface Task {
  content: string;
  status: "todo" | "done";
  onUpdateTaskStatus: (content: string) => void;
  onDeleteTask: (content: string) => void;
}
export function Task({
  content,
  status,
  onUpdateTaskStatus,
  onDeleteTask,
}: Task) {
  const [checked, setChecked] = useState(false);
  function handleUpdateTaskStatus() {
    onUpdateTaskStatus(content);
  }
  function changeCheckStatus(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }
  function handleDeleteTask() {
    onDeleteTask(content);
  }
  return (
    <div className={styles.task}>
      <div className={styles.tasksList}>
        <input
          type="checkbox"
          checked={checked}
          onClick={handleUpdateTaskStatus}
          onChange={changeCheckStatus}
        />
        {checked ? (
          <p>
            <s>{content}</s>
          </p>
        ) : (
          <p>{content}</p>
        )}
        <button onClick={handleDeleteTask} title="Delete task">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
