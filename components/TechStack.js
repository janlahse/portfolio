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
      <h2>Tech Stack</h2>
      <TagList tags={skills} />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  max-width: 600px;
`;
