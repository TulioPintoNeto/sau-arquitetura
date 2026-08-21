import "styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "components/Header";
import type { AppProps } from "next/app";

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
