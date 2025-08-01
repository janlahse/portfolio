import styled from "styled-components";

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef}>
      <h2>About</h2>
      <IntroText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </IntroText>
    </section>
  );
}

const IntroText = styled.p`
  padding: 0 20px;
  font-size: 1.4em;
  line-height: 1.4em;
  border-left: 5px solid #222;
`;
