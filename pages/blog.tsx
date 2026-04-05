import Head from "next/head";
import CallUs from "components/CallUs/index";
import { Footer } from "src/containers/Footer";
import styles from "styles/pages/home.module.scss";
import { Posts } from "src/containers/Posts";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - SAU Arquitetura e Construção</title>
        <meta
          name="description"
          content="Descubra a excelência da arquitetura em Pelotas com o talento de nossos arquitetos. Transforme seus sonhos em projetos de tirar o fôlego. Explore nossas criações únicas e inovadoras."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div itemScope itemType="http://schema.org/Organization">
          <Posts />
          <Footer />
        </div>
      </main>
      <CallUs />
    </>
  );
}
