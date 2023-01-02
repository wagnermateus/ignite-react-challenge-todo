import styles from "./CreateNewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { TasksInfo } from "./TasksInfo";
import { Task } from "./Task";
import { EmptyTask } from "./EmptyTask";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskProps } from "./Task";

export function CreateNewTask() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState({} as TaskProps);
  const [completedTasksCounter, setCompletedTasksCounter] = useState(0);
  const [tasksCounter, setTasksCounter] = useState(0);
  const [taskName, setTaskName] = useState("");

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setNewTask({ content: event.target.value, status: "todo" });
    setTaskName(event.target.value);
  }

  function updateTaskStatus(content: string) {
    const taskUpdated: TaskProps[] = tasks.map((task) => {
      if (task.content === content) {
        if (task.status === "todo") {
          task.status = "done";
        } else if (task.status === "done") {
          task.status = "todo";
        }
      }
      return task;
    });
    setTasks(taskUpdated);
    countCompletedTasks();
  }
  function addNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setTaskName("");
    setTasksCounter(tasks.length + 1);
  }
  function countCompletedTasks() {
    let counter = 0;
    tasks.forEach((task) => {
      if (task.status === "done") {
        counter += 1;
      }
    });
    setCompletedTasksCounter(counter);
  }
  function deleteTask(content: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      if (task.content !== content) {
        return task;
      }
      if (task.status === "done") {
        setCompletedTasksCounter((state) => {
          return state - 1;
        });
      }
    });
    setTasks(tasksWithoutDeletedOne);
    setTasksCounter(tasks.length - 1);
  }

  return (
    <main>
      <form onSubmit={addNewTask} className={styles.newTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskName}
          onChange={handleNewTaskContent}
          required
        />
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>
      <TasksInfo
        tasksCounter={tasksCounter}
        completedTaskCount={completedTasksCounter}
      />

      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Task
              key={task.content}
              content={task.content}
              status={task.status}
              onDeleteTask={deleteTask}
              onUpdateTaskStatus={updateTaskStatus}
            />
          );
        })
      ) : (
        <EmptyTask />
      )}
    </main>
  );
}
