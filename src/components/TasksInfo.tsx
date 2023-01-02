import styles from "./TasksInfo.module.css";

interface TasksInfoProps {
  tasksCounter: number;
  completedTaskCount: number;
}
export function TasksInfo({
  tasksCounter,
  completedTaskCount,
}: TasksInfoProps) {
  return (
    <div className={styles.tasksInfo}>
      <div className={styles.taskInfoContent}>
        <strong>
          Tarefas Criadas <span>{tasksCounter}</span>
        </strong>
        <strong>
          Concluídas{" "}
          <span>
            {completedTaskCount} de {tasksCounter}
          </span>
        </strong>
      </div>
    </div>
  );
}
