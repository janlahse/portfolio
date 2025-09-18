import styled from "styled-components";

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef}>
      <h2>About</h2>
      <IntroText>
        I&apos;m an aspiring frontend web developer from Germany. While studying
        Digital Media and Computer Science, even though I had already built a
        few websites, my main focus was on game development and 3D animation. So
        after finishing my studies, in an effort to showcase this work, I sat
        down to create my first portfolio website.
        <br />
        <br />
        And that&apos;s when it hit me. I had so much fun building that website,
        expanding my knowledge of HTML, CSS and JavaScript while finding ways to
        connect design and functionality, that I got hooked in no time. I was
        proud of what I had done and curious about what else I could do. I knew
        I had to dig deeper and so I did.
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
