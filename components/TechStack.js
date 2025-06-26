import styled from "styled-components";
import TagList from "./TagList";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "GitHub",
  "Vercel",
  "Unity",
  "Blender",
];

export default function TechStack() {
  return (
    <StyledSection>
      <Heading>Tech Stack</Heading>
      <TagList tags={skills} />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  max-width: 600px;
`;

const Heading = styled.h2``;
