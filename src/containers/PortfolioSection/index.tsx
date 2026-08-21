
import Container from "src/components/Container";
import { PortfolioService } from "src/domain/entities/PortfolioService";
import { Service } from "./Service";
import styles from "./styles.module.scss";

interface Props {
  portfolio: PortfolioService[];
}

export function PortfolioSection({ portfolio }: Props) {
  return (
    <Container verticalPadding>
      <div className={styles.portfolioGrid}>
        {portfolio.map((portfolioService) => (
          <Service
            portfolioService={portfolioService}
            key={portfolioService.name}
          />
        ))}
      </div>
    </Container>
  );
}
