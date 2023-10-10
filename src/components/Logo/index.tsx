import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Logo() {
  return (
    <div className={styles.imageBox}>
      <Image
        src="/sau-logo.png"
        alt="Logo da SAU - Somos Arquitetura e Urbanismo"
        fill
        sizes="(max-width: 767px) 150px, 203px"
      />
    </div>
  );
}
