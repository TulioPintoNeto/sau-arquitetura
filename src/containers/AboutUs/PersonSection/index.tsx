import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import CN from "classnames";

interface Props {
  alt: string;
  description: string;
  name: string;
  src: string;
  reversed?: boolean;
}

export function PersonSection({ alt, description, name, reversed = false, src }: Props) {
  return (
    <section
      className={CN(styles.column, {
        [styles.reversed]: reversed,
      })}
    >
      <div className={styles.imageBox}>
        <Image alt={alt} src={src} fill />
      </div>
      <div className={styles.textBox}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </section>
  );
}
