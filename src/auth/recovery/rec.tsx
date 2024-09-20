import Image from "next/image";
import Button from "@/components/button/button";
import styles from "./rec.module.css";
import back from "@/img/back.png";

export default function Rec({
  toggleModule,
}: {
  toggleModule: (module: number) => void;
}) {
  return (
    <div>
      <Button className={styles.other} onClick={() => toggleModule(1)}>
        <Image src={back} alt="назад"></Image>
      </Button>

      <div className={styles.rec}>
        <form>
          <p className={styles.rectext}>
            Восстановление
            <br />
            пароля
          </p>
          <input
            className={styles.vod}
            type="email"
            placeholder="Введите ваш email"
          ></input>
        </form>
        <Button className={styles.recovery}>Отправить</Button>
      </div>
    </div>
  );
}
