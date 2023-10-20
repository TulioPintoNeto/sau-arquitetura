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
            <HeaderSection text="Quem é a" title="SAU Arquitetura" />
          </div>
          <div>
            <PersonSection
              alt="Na foto preto e branca, Pablo Isnardi, um homem branco cruzando os braços e usando uma camisa preta"
              src="/pablo.png"
              descriptions={[
                "Arquiteto e Urbanista formado pela Universidade Católica de Pelotas, sócio fundador da SAU Arquitetura Ltda e responsável pela área comercial e de projetos.",
                "Possui expertise em aprovação de projetos em órgãos públicos e experiência em elaboração dos mais diversos trabalhos, desde alto padrão em condomínios fechados à obras públicas licitadas.",
              ]}
              name="Pablo Isnardi" />
          </div>
          <div>
            <PersonSection
              alt="Na foto preto e branca, Fabrício dos Santos, um homem negro usando uma camisa social branca e óculos"
              src="/fabricio.png"
              descriptions={[
                "Arquiteto e Urbanista formado pela Universidade Católica de Pelotas, sócio fundador da SAU Arquitetura Ltda e responsável pela área orçamentária e de obras.",
                "No mercado da construção civil há mais de dez anos trabalhou em grandes construtoras na cidade, além de empreitar obras particulares em condomínios fechados de Pelotas como Lagos de São Gonçalo e Alphaville.",
              ]}
              name="Fabrício dos Santos"
              reversed />
          </div>
        </Row>
      </Container>
    </section>
  );
}
