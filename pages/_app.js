import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import styled from "styled-components";
import { useRef } from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["Helvetica"],
});

export default function App({ Component, pageProps }) {
  const landingRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const stackRef = useRef();
  const contactRef = useRef();

  function handleScroll(reference) {
    const element =
      reference === "landing"
        ? landingRef
        : reference === "projects"
        ? projectsRef
        : reference === "about"
        ? aboutRef
        : reference === "stack"
        ? stackRef
        : reference === "contact" && contactRef;
    element.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Layout className={roboto.className}>
      <Header handleScroll={handleScroll} />
      <Component
        {...pageProps}
        landingRef={landingRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        stackRef={stackRef}
        contactRef={contactRef}
        handleScroll={handleScroll}
      />
      <Footer />
    </Layout>
  );
}

const Layout = styled.main`
  position: relative;
`;
