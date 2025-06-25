import About from "@/components/About";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <About />
    </Main>
  );
}

const Main = styled.section`
  margin: 110px 17px 30px;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 650px) {
    margin-top: 75px;
  }
`;
