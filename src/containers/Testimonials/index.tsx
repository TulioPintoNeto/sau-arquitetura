import React from "react";
import styles from "./styles.module.scss";
import Container from "src/components/Container";
import { HeaderSection } from "src/components/HeaderSection";
import { Testimonial } from "./Testimonial";
import { Row } from "src/components/Row";
import Link from "next/link";

export function Testimonials() {
  return (
    <section id="depoimentos">
      <Container verticalPadding>
        <Row className={styles.rowMarginBottom}>
          <HeaderSection
            title="Depoimentos"
            text="Nossos clientes deram seus"
          />
          <Testimonial
            person="Matheus Nunes. Ventura Imóveis"
            testimonial="A SAU para mim é sinônimo de confiança. Não somente por ter como amigo um dos sócios, mas por conhecer de perto a qualidade e a seriedade do serviço que prestam. Acompanhar o crescimento e desenvolvimento da empresa e ter a assinatura da empresa no nosso projeto é uma alegria e uma tranquilidade."
          />
        </Row>
        <Row>
          <Testimonial
            person="Gabriel Bilhalba e Rafael Weber. Ciclo Eletricidade"
            testimonial={
              <div>
                A SAU ficou responsável por materializar o espírito da{" "}
                <Link href="https://cicloeletricidade.com/" target="_blank">
                  Ciclo Eletricidade e Energia
                </Link>{" "}
                em um projeto arquitetônico, onde nosso cliente veja nosso
                trabalho estampado em nosso escritório. O resultado surpreendeu
                a todos positivamente, desde o projeto até a entrega da obra.
                Agradecemos o empenho da SAU em todo o processo.
              </div>
            }
          />
          {/* <Testimonial
            person="Antonio da Silva"
            testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          /> */}
        </Row>
      </Container>
    </section>
  );
}
