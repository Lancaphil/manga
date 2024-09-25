import Image from "next/image";
import img from "@/img/cover.png";
import Link from "next/link";
import styles from "./cover.module.css";

export default function CoverToday() {
  return (
    <div className={styles.block}>
      <Link href="/">
        <Image src={img} alt="cover" className={styles.img} />
      </Link>
      <div>
        <p className={styles.title}>Охотник в другом мире</p>
        <div className={styles.genres}>
          <p className={styles.genre}>Жанры:</p>
          <Link href="/tag/comedy" className={styles.tag}>
            Комедия
          </Link>
          <Link href="/tag/drama" className={styles.tag}>
            Драма
          </Link>
        </div>
        <Link href="/" className={styles.chapter}>
          Глава 1
        </Link>
      </div>
    </div>
  );
}
