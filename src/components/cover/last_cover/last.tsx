import Image from "next/image";
import img from "@/img/cover.png";
import Link from "next/link";
import styles from "./last.module.css";

export default function Last() {
  return (
    <div className={styles.block}>
      <div>
        <Image src={img} alt="img" className={styles.img}></Image>
      </div>
      <div className={styles.content}>
        <Link href="/">
          <div className={styles.title}>Охотник в другом мире</div>
        </Link>
        <div className={styles.chapter}>Глава 1</div>
        <div className={styles.chapter}>Глава 1</div>
        <div className={styles.chapter}>Глава 1</div>
      </div>
    </div>
  );
}
