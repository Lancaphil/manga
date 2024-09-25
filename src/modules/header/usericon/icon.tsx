"use client";

import Image from "next/image";
import icon from "@/img/UserIcon.png";
import styles from "./icon.module.css";
import Button from "@/components/button/button";
import Modal from "../modal/modal";
import { useState } from "react";
import Auth from "@/auth/authentication/auth";

export default function Iicon() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Button
        className={styles.iconuser}
        onClick={() => setModalActive(!modalActive)}
      >
        <Image src={icon} alt="user" />
      </Button>
      <Modal active={modalActive} setActive={setModalActive}>
        <Auth />
      </Modal>
    </>
  );
}
