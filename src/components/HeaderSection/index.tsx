import React from "react";
import styles from "./styles.module.scss";
import CN from "classnames";

type Props = {
  title: string;
  text: string;
  center?: boolean;
};

export function HeaderSection({ center = false, title, text }: Props) {
  return (
    <div
      className={CN(styles.headerSection, {
        [styles.center]: center,
      })}
    >
      <p>{text}</p>
      <h2>{title}</h2>
    </div>
  );
}
