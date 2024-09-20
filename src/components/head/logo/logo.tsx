import Image from "next/image";
import logoimage from "@/img/logo.png";
import styles from "./logo.module.css";
import Link from "next/link";

export default function Ilogo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={logoimage} alt="logo" />
    </Link>
  );
}
