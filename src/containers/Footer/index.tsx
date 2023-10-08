import React from "react";
import styles from "./styles.module.scss";
import Container from "src/components/Container";
import { Logo } from "src/components/Logo";
import { Row } from "src/components/Row";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from "@mui/material/IconButton";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container verticalPadding>
        <div className={styles.column}>
          <Logo />
          <Row className={styles.row}>
            <section>
              <h2>Sobre nós</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </section>
            <div className={styles.column}>
              <h2>Onde você nos encontra</h2>
              <address>
                Parque Una Pelotas,
                <br />
                Av. Dois, Plex Hub Corporativo
                <br />
                Sala 509, Areal
                <br />
                Pelotas - RS - 96075-166
                <br />
              </address>
              <div>
                <IconButton href="https://www.instagram.com/sau.arquitetura/">
                  <InstagramIcon />
                </IconButton>
                <IconButton href="https://api.whatsapp.com/send?phone=5553981505549">
                  <WhatsAppIcon />
                </IconButton>
                <IconButton href="mailto:sau.arquitetura@gmail.com">
                  <MailOutlineIcon />
                </IconButton>
                <IconButton href="tel:+5553981505549">
                  <LocalPhoneIcon />
                </IconButton>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
