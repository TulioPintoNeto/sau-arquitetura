import React from "react";
import styles from "./styles.module.scss";
import { HeaderSection } from "components/HeaderSection";
import Container from "components/Container";
import { ServiceSection } from "./ServiceSection";
import { Img } from "src/components/Img";

export function Services() {
  return (
    <section className={styles.services} id="servicos">
      <Container verticalPadding>
        <HeaderSection center title="Serviços" text="Estes são nossos" />
        <div className={styles.grid}>
          <div className={styles.projectImg}>
            <Img
              alt="foto preto e branca dos braços com tatuagem de um homem fazendo um esboço arquitetônico em um papel"
              fill
              src="/projetar.png"
            />
          </div>
          <ServiceSection
            className={styles.project}
            title="Projetos de Arquitetura"
            description="O projeto arquitetônico e de interiores envolvem planos e informações técnicas para conceber e organizar espaços, considerando funcionalidade, estética e segurança. São fundamentais na construção ou renovação, abrangendo materiais, mobiliário, decoração, iluminação e instalações."
          />
          <div className={styles.regulateImg}>
            <Img
              alt="foto preta e branca de um homem com tatuagens trabalhando em um notebook"
              fill
              src="/regularizar.png"
            />
          </div>
          <ServiceSection
            className={styles.regulate}
            title="Regularização de Imóveis"
            description="A regularização de imóveis é o procedimento legal para comprovar a existência e legalidade de uma propriedade, obtendo a documentação adequada, essencial para a segurança jurídica e valorização do imóvel."
          />
          <div className={styles.workImg}>
            <Img
              alt="foto preto e branca de uma construção em andamento de um galpão ainda destelhado e com o muro pela metade"
              fill
              src="/obra.png"
            />
          </div>
          <ServiceSection
            className={styles.work}
            title="Execução de Obras"
            description="Envolvimento na construção de edifícios que incluem desde etapas como terraplenagem, fundação, estruturação, acabamento e instalações elétricas e hidráulicas."
          />
        </div>
      </Container>
    </section>
  );
}
