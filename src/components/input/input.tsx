import Button from "@/components/button/button";
import Image from "next/image";
import pancel from "@/img/pancel.png";
import styles from "./input.module.css";
import { ReactNode } from "react";

export default function Inp({
  children,
  type,
  placeholder,
}: {
  children: ReactNode;
  type: string;
  placeholder: string;
}) {
  return (
    <div className={styles.inp}>
      <p className={styles.name}>{children}</p>
      <input
        className={styles.line}
        type={type}
        placeholder={placeholder}
      ></input>
      <Button className={styles.btn}>
        <Image src={pancel} alt="icon"></Image>
      </Button>
    </div>
  );
}
