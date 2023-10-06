import Container from "../Container";
import styles from "./styles.module.scss";
import { HeaderSection } from './../HeaderSection/index';

const HomeMain = () => {
  return (
    <div className={styles.background}>
      <div className={styles.mainSectionBox}>
        <Container>
          <div className={styles.constrainedBox}>
            <HeaderSection 
              title="Arquitetura e Construção Civil em Pelotas"
              text="Projetando e realizando sonhos"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomeMain;
