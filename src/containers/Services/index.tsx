import React from "react";
import styles from "./styles.module.scss";
import { HeaderSection } from "components/HeaderSection";
import Container from "components/Container";
import Image from "next/image";
import { ServiceSection } from "./ServiceSection";

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
          <ServiceSection
            title="Consultoria"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <div>
            <Image
              alt="um homem trabalhando em uma obra com cimento e tijolos"
              fill
              src="/construcao.png"
            />
          </div>
          <ServiceSection
            title="Planejar"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <div>
            <Image
              alt="um homem branco e uma mulher negra apertando as mãos"
              fill
              src="/consultoria.png"
            />
          </div>
          <ServiceSection
            title="Construir"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
      </Container>
    </section>
  );
}
