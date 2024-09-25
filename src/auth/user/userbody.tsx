"use client";

import Button from "@/components/button/button";
import styles from "./userbody.module.css";
import Image from "next/image";
import icon from "@/img/MainUserIcon.png";
import Inp from "@/components/input/input";
import { useState } from "react";
import Premium from "./premium/premium";

export default function Userbody() {
  const [activeButton, setActiveButton] = useState(1);
  const toggleContent = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div>
      <div className={styles.up}>
        <div className={styles.background} />
        <div className={styles.user}></div>
        <div className={styles.usercontent}>
          <Image src={icon} alt="icon" className={styles.img} />
          <p className={styles.name}>UserName</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.selector}>
          <Button
            className={
              activeButton === 1 ? `${styles.btn} ${styles.btna}` : styles.btn
            }
            onClick={() => toggleContent(1)}
          >
            Настройки
          </Button>
          <Button
            className={
              activeButton === 2 ? `${styles.btn} ${styles.btna}` : styles.btn
            }
            onClick={() => toggleContent(2)}
          >
            Премиум
          </Button>
        </div>
        <div className={styles.content}>
          {activeButton === 1 && (
            <div className={styles.settingcontent}>
              <Inp type="text" placeholder="Никнейм">
                Никнейм
              </Inp>
              <Inp type="password" placeholder="Пароль">
                Пароль
              </Inp>
              <Inp type="email" placeholder="Емейл">
                Email
              </Inp>
            </div>
          )}
          {activeButton === 2 && <Premium />}
        </div>
      </div>
    </div>
  );
}
