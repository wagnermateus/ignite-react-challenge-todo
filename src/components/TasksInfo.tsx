import styles from "./TasksInfo.module.css";

export function TasksInfo() {
  return (
    <div className={styles.tasksInfo}>
      <div className={styles.taskInfoContent}>
        <strong>
          Tarefas Criadas <span>5</span>
        </strong>
        <strong>
          Concluídas <span>2 de 5</span>
        </strong>
      </div>
    </div>
  );
}
