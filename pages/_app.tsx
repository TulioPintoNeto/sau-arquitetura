import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: { primary: { main: "#2646e6" }, secondary: { main: "#fafafa" } },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
