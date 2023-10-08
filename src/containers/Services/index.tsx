import React from "react";
import styles from "./styles.module.scss";
import { HeaderSection } from "components/HeaderSection";
import Container from "components/Container";
import Image from "next/image";

export function Services() {
  return (
    <section className={styles.services}>
      <Container verticalPadding>
        <HeaderSection center title="Serviços" text="Estes são nossos" />
        <div className={styles.grid}>
          <div>
          <Image
            alt="a imagem mostra um computador aberto em um software para realizar projetos de arquitetura"
            fill
            src="/computador-projeto.png"
          />
          </div>
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
