import React from "react";
import styles from "./styles.module.scss";
import CN from "classnames";

type Props = {
  title: string;
  text: string;
  center?: boolean;
  main?: boolean;
  titleItemProp?: string;
};

export function HeaderSection({
  title,
  text,
  center = false,
  main = false,
  titleItemProp,
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
        <h1 className={styles.title} itemProp={titleItemProp}>{title}</h1>
      ) : (
        <h2 className={styles.title} itemProp={titleItemProp}>{title}</h2>
      )}
    </div>
  );
}
