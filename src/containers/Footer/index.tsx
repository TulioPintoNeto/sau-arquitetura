import React from "react";
import styles from "./styles.module.scss";
import Container from "src/components/Container";
import { Logo } from "src/components/Logo";
import { Row } from "src/components/Row";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container verticalPadding>
        <div className={styles.column}>
          <Logo />
          <Row>
            <section>
              <h2 className={styles.title}>Sobre nós</h2>
              <p className={styles.paragraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </section>
            <div></div>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
