import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  description: string;
}

export function ServiceSection({ title, description }: Props) {
  return (
    <section className={styles.serviceSection}>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
