import React from "react";
import styles from "./styles.module.scss";
import CN from "classnames";

type Props = {
  title: string;
  text: string;
  center?: boolean;
  main?: boolean;
};

export function HeaderSection({
  title,
  text,
  center = false,
  main = false,
}: Props) {
  return (
    <div
      className={CN(styles.headerSection, {
        [styles.main]: main,
        [styles.center]: center,
      })}
    >
      <p className={styles.complementaryText}>{text}</p>
      {main ? (
        <h1 className={styles.title}>{title}</h1>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
    </div>
  );
}
