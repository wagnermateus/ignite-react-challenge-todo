import styles from "./CreateNewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { TasksInfo } from "./TasksInfo";
import { Task } from "./Task";
import { EmptyTask } from "./EmptyTask";
export function CreateNewTask() {
  return (
    <main>
      <form className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>
      <TasksInfo />
      {/*  <Task />
      <Task />
      <Task />
  <Task />*/}
      <EmptyTask />
    </main>
  );
}
