import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import styled from "styled-components";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const stackRef = useRef();
  const contactRef = useRef();
  function handleScroll(reference) {
    const element =
      reference === "projects"
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
    <Layout>
      <Header handleScroll={handleScroll} />
      <Component
        {...pageProps}
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

const Layout = styled.div`
  position: relative;
  min-height: 100vh;
`;
