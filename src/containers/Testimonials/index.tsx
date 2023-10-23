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
          <HeaderSection title="Depoimentos" text="Confira alguns" />
          <Testimonial
            person={
              <span
                itemScope
                itemType="http://schema.org/Organization"
              >
                <span itemProp="founder">Matheus Nunes</span>.{" "}
                <Link
                  itemProp="url"
                  href="https://www.imoveisventura.com.br/"
                  target="_blank"
                >
                  <span itemProp="name">Ventura Imóveis</span>
                </Link>
              </span>
            }
            testimonial="A SAU para mim é sinônimo de confiança. Não somente por ter como amigo um dos sócios, mas por conhecer de perto a qualidade e a seriedade do serviço que prestam. Acompanhar o crescimento e desenvolvimento da empresa e ter a assinatura da empresa no nosso projeto é uma alegria e uma tranquilidade."
          />
        </Row>
        <Row>
          <Testimonial
            person={
              <span
                itemScope
                itemType="http://schema.org/Organization"
              >
                <span itemProp="founder">Gabriel Bilhalba</span> e{" "}
                <span itemProp="founder">Rafael Weber</span>.{" "}
                <span itemProp="name">Ciclo Eletricidade</span>
              </span>
            }
            testimonial={
              <>
                A SAU ficou responsável por materializar o espírito da{" "}
                <Link
                  itemProp="url"
                  href="https://cicloeletricidade.com/"
                  target="_blank"
                >
                  Ciclo Eletricidade e Energia
                </Link>{" "}
                em um projeto arquitetônico, onde nosso cliente veja nosso
                trabalho estampado em nosso escritório. O resultado surpreendeu
                a todos positivamente, desde o projeto até a entrega da obra.
                Agradecemos o empenho da SAU em todo o processo.
              </>
            }
          />
          <Testimonial
            person={
              <>
                <span
                  itemScope
                  itemType="http://schema.org/Person"
                >
                  <span itemProp="name">Thiago Oliveira</span>
                </span>
                . Servente
              </>
            }
            testimonial="Trabalhar na SAU é estar diariamente com grandes profissionais responsáveis habilidosos para a execução de cada obra. Grato por fazer parte dessa equipe!"
          />
        </Row>
      </Container>
    </section>
  );
}
