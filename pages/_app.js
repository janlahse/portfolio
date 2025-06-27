import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  min-height: 100vh;
`;
