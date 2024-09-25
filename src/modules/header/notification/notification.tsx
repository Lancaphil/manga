import styles from "./notification.module.css";
import Image from "next/image";
import image from "@/img/notification.png";
import Button from "@/components/button/button";

export default function Inotification() {
  return (
    <Button className={styles.button}>
      <Image src={image} alt="notification" />
    </Button>
  );
}
