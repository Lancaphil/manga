import styles from "./premium.module.css";

export default function Premium() {
  return (
    <div className={styles.block}>
      <div className={styles.miniblock}>
        <p className={styles.title}>Приобретениие обычной подписки</p>
        <p className={styles.title2}>Привяжите свой Вконтакте</p>
        <div>
          — Перейдите по этой ссылке и оформите VK DONUT в нашей группе.
        </div>
        <div>
          — После оформления платной подписки вернитесь на этот сайт и в личном
          кабинете активируйте Премиум-подписку.
        </div>
      </div>
      <div className={styles.miniblock}>
        <p className={styles.title}>Приобретениие альтернативной подписки</p>
        <p className={styles.title2}>Введите проверочный код</p>
        <div>
          — Если вы не из России, то перейдите по этой ссылке и оформите
          подписку через сервис Boosty.
        </div>
        <div>
          — Затем напишите в личные сообщения группы, либо в лс телеграмм. Вам
          выдадут промокод, который нужно будет ввести в окошке ниже, он
          активирует Премиум-подписку
        </div>
      </div>
    </div>
  );
}
