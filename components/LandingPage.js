import styled from "styled-components";

export default function LandingPage({ landingRef, handleScroll }) {
  return (
    <Container ref={landingRef}>
      <Heading>
        Hi, I am <Span onClick={() => handleScroll("about")}>Jan</Span>.
      </Heading>
      <Paragraph>
        I create responsive web apps with{" "}
        <Span onClick={() => handleScroll("stack")}>React</Span>. Check out my{" "}
        <Span onClick={() => handleScroll("projects")}>work</Span> and feel free
        to <Span onClick={() => handleScroll("contact")}>reach out</Span> about{" "}
        bringing your project to life.
      </Paragraph>
    </Container>
  );
}

const Container = styled.section`
  min-height: calc(100vh - 135px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 650px) {
    min-height: calc(100vh - 95px);
  }
`;

const Heading = styled.h3`
  font-size: 60px;
  font-weight: 300;
  @media (min-width: 650px) {
    font-size: 100px;
  }
`;

const Paragraph = styled.p`
  font-size: 40px;
  padding: 0;
  font-weight: 300;
  @media (min-width: 650px) {
    font-size: 48px;
  }
`;

const Span = styled.span`
  color: hsl(240, 52%, 52%);
  cursor: pointer;
`;
