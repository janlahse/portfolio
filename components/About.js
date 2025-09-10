import styled from "styled-components";

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef}>
      <h2>About</h2>
      <IntroText>
        I&apos;m Jan, a Frontend Web Developer from Germany with a background in
        Digital Media and Computer Science. I create responsive web apps using
        React and Next.js, with a strong focus on clean code and accessibility.
        <br />
        <br />
        In 2024, I created my first portfolio website to showcase my work, which
        was mostly about game development and 3D films. And that&apos;s when it
        hit me. I had so much fun building that website, expanding my knowledge
        of HTML, CSS and JavaScript while finding ways to connect design and
        functionality, and in no time I got hooked. I was proud of what I did,
        curious about what else I could do and eager to dig deeper. So I did.
        <br />
        <br />
        I&apos;m an enthusiastic learner and a natural problem-solver. To me,
        identifying the root of an issue, coming up with a plan and taking
        action to fix it is a welcome challenge and a great opportunity for
        growth. When I&apos;m not coding, you&apos;ll probably catch me baking
        pastries, playing some musical instrument or watching birds.
      </IntroText>
    </section>
  );
}

const IntroText = styled.p`
  padding: 0 20px;
  font-size: 1.2em;
  line-height: 1.3em;
  border-left: 5px solid #222;
`;
