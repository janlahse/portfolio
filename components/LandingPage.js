import styled from "styled-components";

export default function LandingPage({ landingRef }) {
  return (
    <Container ref={landingRef}>
      <TextOne>Hi, I&apos;m Jan. </TextOne>
      <TextTwo>I create responsive web apps with React and Next.js</TextTwo>
      <TextThree>
        Check out my work and feel free to reach out about bringing your project
        to life.
      </TextThree>
    </Container>
  );
}

const Container = styled.section`
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextOne = styled.h3`
  font-size: 7em;
`;

const TextTwo = styled.h3`
  font-size: 3.4em;
  padding: 23px 0 40px;
`;

const TextThree = styled.h3`
  font-size: 2em;
`;
