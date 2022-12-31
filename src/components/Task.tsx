import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.tasksList}>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet illo placeat doloribus soluta aliquid rerum
          commodi? Quae, odio!
        </p>
        <button title="Delete task">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
