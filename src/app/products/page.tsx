import Link from "next/link";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <Link href="/" className={styles.products}>
      Prod
    </Link>
  );
}
