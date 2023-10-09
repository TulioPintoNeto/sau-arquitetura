import React from "react";
import styles from "./styles.module.scss";
import Container from "src/components/Container";
import { Logo } from "src/components/Logo";
import { Row } from "src/components/Row";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
                Somos comprometidos com a excelência arquitetônica, priorizando
                o bem-estar, qualidade e segurança em nossos projetos e obras.
                Acreditamos no impacto positivo de espaços bem concebidos e
                construídos, colaborando com nossos clientes e abrangendo todos
                os campos da arquitetura e construção civil. Somos Arquitetura e
                Urbanismo.
              </p>
            </section>
            <div className={styles.column}>
              <h2>Onde você nos encontra</h2>
              <address>
                Parque Una Pelotas,
                <br />
                Av. Dois, n°100 Plex Hub Corporativo
                <br />
                Sala 509, Areal
                <br />
                Pelotas - RS - 96075-160
                <br />
              </address>
              <div>
                <IconButton
                  href="https://www.instagram.com/sau.arquitetura/"
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://api.whatsapp.com/send?phone=5553981505549"
                  target="_blank"
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  href="mailto:sau.arquitetura@gmail.com"
                  target="_blank"
                >
                  <MailOutlineIcon />
                </IconButton>
                <IconButton href="tel:+5553981505549" target="_blank">
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
