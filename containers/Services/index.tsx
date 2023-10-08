import React from "react";
import styles from "./styles.module.scss";
import { HeaderSection } from "../../components/HeaderSection";
import Container from "../../components/Container";

export function Services() {
  return (
    <section className={styles.services}>
      <Container verticalPadding>
        <HeaderSection center title="Serviços" text="Estes são nossos" />
        <div className={styles.grid}>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </Container>
    </section>
  );
}
