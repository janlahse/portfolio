import styled from "styled-components";
import Tag from "./Tag";

export default function About() {
  return (
    <section>
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
  max-width: 600px;
  border-left: 5px solid #222;
`;
