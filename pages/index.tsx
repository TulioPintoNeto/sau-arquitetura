import Head from "next/head";
import HomeMain from "containers/HomeMain/index";
import CallUs from "components/CallUs/index";
import AboutUs from "containers/AboutUs/index";
import { Services } from "containers/Services";
import { Testimonials } from "src/containers/Testimonials";
import { Footer } from "src/containers/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>SAU Arquitetura e Construção - Projetando e realizando sonhos</title>
                {/* <meta name="description" content="Generated by create next app" /> */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                <HomeMain />
                <AboutUs />
                <Services />
                <Testimonials />
                <Footer />
            </main>
            <CallUs />
        </>
    );
}
