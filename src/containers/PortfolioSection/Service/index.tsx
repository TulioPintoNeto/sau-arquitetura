import { Img } from "src/components/Img";
import { PortfolioService } from "src/domain/entities/PortfolioService";
import styles from "./styles.module.scss";

interface Props {
  portfolioService: PortfolioService;
}

const isDefined = (attr: string | undefined): attr is string => Boolean(attr);

export function Service({ portfolioService }: Props) {
  console.log(portfolioService);
  const { photo, name } = portfolioService;
  const { alt, url } = photo || {};

  return (
    <div className={styles.box}>
      {isDefined(alt) && isDefined(url) && (
        <div className={styles.imgBox}>
          <Img src={url} alt={alt} />
        </div>
      )}
      <div className={styles.textBox}>
        <p>{name}</p>
      </div>
    </div>
  );
}
