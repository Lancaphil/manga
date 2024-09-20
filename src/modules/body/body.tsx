import styles from "./body.module.css";
import Best from "@/components/body/best/best";
import Today from "@/components/body/today/today";
import Popular from "@/components/body/popular/popular";
import Latest from "@/components/body/latest/latest";

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
