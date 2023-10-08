import Head from "next/head";
import HomeMain from "containers/HomeMain/index";
import CallUs from "components/CallUs/index";
import AboutUs from "containers/AboutUs/index";
import { Services } from "containers/Services";

export default function Home() {
    return (
        <>
            <Head>
                {/* <title>Create Next App</title> */}
                {/* <meta name="description" content="Generated by create next app" /> */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main>
                <HomeMain />
                <AboutUs />
                <Services />
            </main>
            <CallUs />
        </>
    );
}
