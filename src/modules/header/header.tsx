import styles from "./header.module.css";
import Ilogo from "@/modules/header/logo/logo";
import Isearch from "@/modules/header/search/search";
import Inotification from "@/modules/header/notification/notification";
import Iicon from "@/modules/header/usericon/icon";

export default function Head() {
  return (
    <header>
      <div className={styles.topstripe}>
        <Ilogo />
        <Isearch />
        <Inotification />
        <Iicon />
      </div>
      <div className={styles.bottomstripe}></div>
    </header>
  );
}
