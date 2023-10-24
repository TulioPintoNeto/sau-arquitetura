import Head from "next/head";
import HomeMain from "containers/HomeMain/index";
import CallUs from "components/CallUs/index";
import { AboutUs as Team } from "src/containers/Team/index";
import { Services } from "containers/Services";
import { Testimonials } from "src/containers/Testimonials";
import { Footer } from "src/containers/Footer";
import styles from 'styles/pages/portfolio.module.scss';

export default function Portfolio() {
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
        <HomeMain
          backgroundClassName={styles.background}
          text="Projetando e realizando sonhos"
          title="Arquitetura e Construção Civil em Pelotas"
        />
        <Footer />
      </main>
    </>
  );
}
