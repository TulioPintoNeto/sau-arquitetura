import Head from "next/head";
import MainSection from "src/containers/MainSection/index";
import { Footer } from "src/containers/Footer";
import styles from "styles/pages/portfolio.module.scss";
import { PortfolioService } from "src/domain/entities/PortfolioService";
import { getPortfolio } from "src/data/endpoints/getPortfolio";

interface Props {
  portfolio: PortfolioService[];
}

export default function Portfolio({ portfolio }: Props) {
  return (
    <>
      <Head>
        <title>SAU Arquitetura e Construção - Nosso portfólio</title>
        <meta
          name="description"
          content="Explore nosso portfólio de projetos de arquitetura que redefinem espaços e inspiram a vida. Descubra design inovador, beleza e funcionalidade em cada projeto. De residências elegantes a espaços comerciais icônicos, nossa criatividade transforma sonhos em realidade."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MainSection
          backgroundClassName={styles.background}
          text="Design, beleza e funcionalidade"
          title="Portfólio"
        />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const portfolio = await getPortfolio();

  return { props: { portfolio } };
}
