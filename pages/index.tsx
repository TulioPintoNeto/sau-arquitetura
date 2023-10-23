import Head from "next/head";
import HomeMain from "containers/HomeMain/index";
import CallUs from "components/CallUs/index";
import { AboutUs as Team } from "src/containers/Team/index";
import { Services } from "containers/Services";
import { Testimonials } from "src/containers/Testimonials";
import { Footer } from "src/containers/Footer";
import Script from "next/script";

function AnalyticsTag() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NXJWMD9YVP"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NXJWMD9YVP');
        `}
      </Script>
    </>
  );
}

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
      <AnalyticsTag />
      <main>
        <div itemScope itemType="http://schema.org/Organization">
          <HomeMain />
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
