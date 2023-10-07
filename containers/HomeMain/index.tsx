import Container from "../../components/Container";
import styles from "./styles.module.scss";
import { HeaderSection } from '../../components/HeaderSection/index';

const HomeMain = () => {
  return (
    <div className={styles.background}>
      <div className={styles.mainSectionBox}>
        <Container>
          <div className={styles.constrainedBox}>
            <HeaderSection 
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
