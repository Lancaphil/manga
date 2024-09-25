"use client";

import Headline from "@/components/headline/headline";
import styles from "./popular.module.css";
import Button from "@/components/button/button";
import { useState } from "react";
import Content from "@/content/content";

export default function Popular() {
  const [activeButton, setActiveButton] = useState(1);

  const toggleContent = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className={styles.popular}>
      <Headline>Популярно</Headline>
      <div className={styles.selector}>
        <Button
          className={
            activeButton === 1 ? `${styles.btn} ${styles.btna}` : styles.btn
          }
          onClick={() => toggleContent(1)}
        >
          За неделю
        </Button>
        <Button
          className={
            activeButton === 2 ? `${styles.btn} ${styles.btna}` : styles.btn
          }
          onClick={() => toggleContent(2)}
        >
          За месяц
        </Button>
        <Button
          className={
            activeButton === 3 ? `${styles.btn} ${styles.btna}` : styles.btn
          }
          onClick={() => toggleContent(3)}
        >
          За год
        </Button>
      </div>
      <div className={styles.content}>
        {activeButton === 1 && <Content />}
        {activeButton === 2 && <Content />}
        {activeButton === 3 && <Content />}
      </div>
    </div>
  );
}
