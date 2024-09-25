import Image from "next/image";
import img from "@/img/cover.png";
import Link from "next/link";
import styles from "./cover.module.css";

export default function Popularcover() {
  return (
    <div className={styles.block}>
      <div className={styles.num}>1</div>
      <div>
        <Image src={img} alt="img" className={styles.img} />
      </div>
      <div>
        <div className={styles.title}>Охотник в другом мире</div>
        <div className={styles.genres}>
          <p className={styles.genre}>Жанры:</p>
          <Link href="/tag/comedy" className={styles.tag}>
            Комедия
          </Link>
          <Link href="/tag/drama" className={styles.tag}>
            Драма
          </Link>
        </div>
        <div className={styles.chapter}>Глава 1</div>
      </div>
    </div>
  );
}
