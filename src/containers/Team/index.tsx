import Container from "components/Container/index";
import { HeaderSection } from "components/HeaderSection";
import { PersonSection } from "./PersonSection";
import { Row } from "src/components/Row";
import styles from "./styles.module.scss";

export function AboutUs() {
  return (
    <section id="sobre">
      <Container verticalPadding>
        <Row className={styles.row}>
          <div>
            <HeaderSection
              text="Quem é a"
              title="SAU Arquitetura"
              titleItemProp="name"
            />
          </div>
          <div>
            <PersonSection
              alt="Na foto preto e branca, Pablo Isnardi, um homem branco cruzando os braços e usando uma camisa preta"
              src="/pablo.png"
              descriptions={[
                "Arquiteto e Urbanista formado pela Universidade Católica de Pelotas, sócio fundador da SAU Arquitetura Ltda e responsável pela área comercial e de projetos.",
                "Possui expertise em aprovação de projetos em órgãos públicos e experiência em elaboração dos mais diversos trabalhos, desde alto padrão em condomínios fechados à obras públicas licitadas.",
              ]}
              name="Pablo Isnardi"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
}
