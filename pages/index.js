import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import styled from "styled-components";
import Head from "next/head";
import LandingPage from "@/components/LandingPage";

export default function Home({
  landingRef,
  projectsRef,
  aboutRef,
  stackRef,
  contactRef,
  handleScroll,
}) {
  return (
    <Main>
      <Head>
        <title>Jan Lahse</title>
      </Head>
      <LandingPage landingRef={landingRef} handleScroll={handleScroll} />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <TechStack stackRef={stackRef} />
      <ContactForm contactRef={contactRef} />
      <NavBar isHeaderNav={false} handleScroll={handleScroll} />
    </Main>
  );
}

const Main = styled.section`
  margin: 65px 15px 5px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > * {
    max-width: 800px;
    width: 100%;
    scroll-margin-top: 65px;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
