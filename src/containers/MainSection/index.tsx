import CN from 'classnames';
import Container from "components/Container";
import { HeaderSection } from "components/HeaderSection/index";
import { useMainSectionHeight } from "src/hooks/useMainSectionHeight";
import styles from "./styles.module.scss";

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
              text={text}
              title={title}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainSection;
