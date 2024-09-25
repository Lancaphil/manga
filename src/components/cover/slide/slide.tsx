import Image from "next/image";
import cover from "@/img/cover.png";
import styles from "./slide.module.css";
import Button from "../../button/button";
import Link from "next/link";

export default function Slide() {
  return (
    <div className={styles.background}>
      <div className={styles.blur}></div>
      <div className={styles.slide}>
        <div className={styles.text}>
          <p className={styles.title}>Охотник в другом мире</p>
          <p className={styles.description}>
            В современном Хоккайдо появился бурый медведь возле начальной школы,
            поэтому член местной ассоциации охотников отправляется его
            устранить. Однако он был убит медведем и просыпается в
            фантастическомМ мире, вооруженный только дробовиком Remington M870,
            который был у него...
          </p>
          <Link href="/">
            <Button className={styles.btn}>Читать</Button>
          </Link>
        </div>
        <div className={styles.img}>
          <Image src={cover} alt="cover" />
        </div>
      </div>
    </div>
  );
}
