import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import MuiThemeProvider from "../ThemeProvider/MuiThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <MuiThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  );
}
