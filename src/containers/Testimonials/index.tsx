import React from "react";
import styles from "./styles.module.scss";
import Container from "src/components/Container";
import { HeaderSection } from "src/components/HeaderSection";
import { Testimonial } from "./Testimonial";
import { Row } from "src/components/Row";

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
            person="Antonio da Silva"
            testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </Row>
        <Row>
          <Testimonial
            person="Antonio da Silva"
            testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Testimonial
            person="Antonio da Silva"
            testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </Row>
      </Container>
    </section>
  );
}
