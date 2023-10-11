import React from "react";
import CN from 'classnames';
import styles from "./styles.module.scss";

interface Props {
  className: string;
  description: string;
  title: string;
}

export function ServiceSection({ className, description, title }: Props) {
  return (
    <section className={CN(styles.serviceSection, className)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
