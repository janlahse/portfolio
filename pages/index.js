import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Jan Lahse</title>
      </Head>
      <Projects />
      <About />
      <TechStack />
      <ContactForm />
      <NavBar isHeaderNav={false} />
    </Main>
  );
}

const Main = styled.section`
  margin: 55px 15px 5px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > * {
    max-width: 600px;
  }
`;
