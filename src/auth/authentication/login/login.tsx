import Button from "@/components/button/button";
import styles from "./login.module.css";

export default function Login({
  toggleModule,
}: {
  toggleModule: (module: number) => void;
}) {
  return (
    <div className={styles.log}>
      <Button className={styles.vk}>Войти через Вконтакте</Button>
      <p className={styles.text}>Войти в аккаунт</p>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Введите ваш email"
          className={styles.vod}
        ></input>
        <input
          type="password"
          placeholder="Введите ваш пароль"
          className={styles.vod}
        ></input>
      </form>
      <Button className={styles.login}>Войти</Button>
      <Button className={styles.other} onClick={() => toggleModule(2)}>
        Забыли пароль
      </Button>
      <Button className={styles.other} onClick={() => toggleModule(3)}>
        Зарегистрироваться
      </Button>
    </div>
  );
}
