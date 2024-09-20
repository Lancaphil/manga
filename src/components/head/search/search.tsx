import styles from "./search.module.css";

export default function Isearch() {
  return (
    <div className={styles.container}>
      <form>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.search}
        ></input>
      </form>
    </div>
  );
}
