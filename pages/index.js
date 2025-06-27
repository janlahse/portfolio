import About from "@/components/About";
import TechStack from "@/components/TechStack";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <About />
      <TechStack />
    </Main>
  );
}

const Main = styled.section`
  margin: 115px 15px 5px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 650px) {
    margin-top: 80px;
  }
`;
