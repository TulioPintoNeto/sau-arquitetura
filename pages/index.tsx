import Head from "next/head";
import CallUs from "components/CallUs/index";
import { Services } from "containers/Services";
import { Footer } from "src/containers/Footer";
import MainSection from "src/containers/MainSection/index";
import { AboutUs as Team } from "src/containers/Team/index";
import { Testimonials } from "src/containers/Testimonials";
import styles from "styles/pages/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SAU Arquitetura e Construção - Projetando e realizando sonhos
        </title>
        <meta
          name="description"
          content="Descubra a excelência da arquitetura em Pelotas com o talento de nossos arquitetos. Transforme seus sonhos em projetos de tirar o fôlego. Explore nossas criações únicas e inovadoras."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div itemScope itemType="http://schema.org/Organization">
          <MainSection
            backgroundClassName={styles.background}
            text="Projetando e realizando sonhos"
            title="Arquitetura e Construção Civil em Pelotas"
          />
          <Team />
          <Services />
          <Testimonials />
          <Footer />
        </div>
      </main>
      <CallUs />
    </>
  );
}
