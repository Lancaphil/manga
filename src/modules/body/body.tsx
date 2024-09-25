import styles from "./body.module.css";
import Best from "@/modules/body/best/best";
import Today from "@/modules/body/today/today";
import Popular from "@/modules/body/popular/popular";
import Latest from "@/modules/body/latest/latest";

export default function Body() {
  return (
    <main>
      <div className={styles.body}>
        <div>
          <Best />
          <Today />
          <Latest />
        </div>
        <div>
          <Popular />
        </div>
      </div>
    </main>
  );
}
