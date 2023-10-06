import Container from "../Container";
import styles from "./styles.module.scss";

const HomeMain = () => {
  return (
    <div className={styles.background}>
      <div className={styles.mainSectionBox}>
        <Container>
          <div className={styles.constrainedBox}>
            <p>Projetando e realizando sonhos</p>
            <h2>Arquitetura e Construção Civil em Pelotas</h2>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomeMain;
