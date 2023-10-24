import Container from "components/Container";
import CN from 'classnames';
import { HeaderSection } from "components/HeaderSection/index";
import styles from "./styles.module.scss";
import { useMainSectionHeight } from "src/hooks/useMainSectionHeight";

interface Props {
  backgroundClassName: string;
  text: string;
  title: string;
}

const MainSection = ({ backgroundClassName, text, title }: Props) => {
  const height = useMainSectionHeight();

  return (
    <div className={CN(styles.background, backgroundClassName)} style={{ height }}>
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

export default MainSection;
