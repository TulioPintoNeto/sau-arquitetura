import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  text: string;
  center?: boolean;
}

export function HeaderSection({ center = false, title, text }: Props) {
  return (
    <div className={styles.headerSection}>
      <p>{text}</p>
      <h2>{title}</h2>
    </div>
  );
}
