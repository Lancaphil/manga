import styles from "./header.module.css";
import Ilogo from "@/components/head/logo/logo";
import Isearch from "@/components/head/search/search";
import Inotification from "@/components/head/notification/notification";
import Iicon from "@/components/head/usericon/icon";

export default function Head() {
  return (
    <header>
      <div className={styles.topstripe}>
        <Ilogo />
        <Isearch />
        <Inotification />
        <Iicon />
      </div>
      <div className={styles.bottomstripe}>stripe</div>
    </header>
  );
}
