import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <Projects />
      <About />
      <TechStack />
    </Main>
  );
}

const Main = styled.section`
  margin: 90px 15px 5px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 650px) {
    margin: 55px 15px 5px;
  }
`;
