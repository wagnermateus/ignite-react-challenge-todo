import styles from "./EmptyTask.module.css";
import emptyTask from "../assets/emptyTask.svg";
export function EmptyTask() {
  return (
    <div className={styles.emptyTask}>
      <div className={styles.emptyTaskContent}>
        <img src={emptyTask} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
