import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  itemPropLogo?: boolean;
}

export function Logo({ itemPropLogo = false }) {
  return (
    <div className={styles.imageBox}>
      <Image
        alt="Logo da SAU - Somos Arquitetura e Urbanismo"
        fill
        itemProp={itemPropLogo ? 'logo' : undefined}
        sizes="(max-width: 767px) 150px, 203px"
        src="/sau-logo.png"
      />
    </div>
  );
}
