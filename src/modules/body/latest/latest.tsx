import Headline from "@/components/headline/headline";
import styles from "./latest.module.css";
import Last from "@/components/cover/last_cover/last";

export default function Latest() {
  return (
    <div className={styles.latest}>
      <div>
        <Headline>Последние обновления</Headline>
      </div>
      <div className={styles.content}>
        <Last />
        <Last />
        <Last />
        <Last />
        <Last />
        <Last />
        <Last />
        <Last />
        <Last />
        <Last />
      </div>
    </div>
  );
}
