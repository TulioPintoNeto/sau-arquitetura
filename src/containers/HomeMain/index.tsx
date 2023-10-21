import Container from "components/Container";
import { HeaderSection } from "components/HeaderSection/index";
import styles from "./styles.module.scss";
import { useHomeMainHeight } from "src/hooks/useHomeMainHeight";

const HomeMain = () => {
  const height = useHomeMainHeight();

  return (
    <div className={styles.background} style={{ height }}>
      <div className={styles.mainSectionBox} style={{ height }}>
        <Container>
          <div className={styles.constrainedBox}>
            <HeaderSection
              main
              text="Projetando e realizando sonhos"
              title="Arquitetura e Construção Civil em Pelotas"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomeMain;
