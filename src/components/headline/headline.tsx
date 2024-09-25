import { ReactNode } from "react";
import styles from "./headline.module.css";

export default function Headline({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className={styles.head}>{children}</div>
      <div className={styles.stripe}></div>
    </div>
  );
}
