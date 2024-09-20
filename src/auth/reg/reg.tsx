import Button from "@/components/button/button";
import styles from "./reg.module.css";

export default function Reg({
  toggleModule,
}: {
  toggleModule: (module: number) => void;
}) {
  return (
    <div className={styles.modal}>
      <p className={styles.regtext}>Регистрация</p>
      <form className={styles.forma}>
        <input
          className={styles.vod}
          type="text"
          placeholder="Введите никнейм"
        ></input>
        <input
          className={styles.vod}
          type="email"
          placeholder="Введите вашу почту"
        ></input>
        <input
          className={styles.vod}
          type="password"
          placeholder="Введите пароль"
        ></input>
        <input
          className={styles.vod}
          type="password"
          placeholder="Повторно введите пароль"
        ></input>
      </form>
      <p className={styles.rules}>
        Регистрируясь, вы соглашаетесь с условиями <br />
        <Button className={styles.rulesbutton}>
          Пользовательского соглашения
        </Button>
      </p>
      <Button className={styles.reg}>Зарегистрироваться</Button>
      <Button className={styles.other} onClick={() => toggleModule(1)}>
        Уже есть аккаунт
      </Button>
    </div>
  );
}
