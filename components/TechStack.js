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

export default function TechStack({ stackRef }) {
  return (
    <section ref={stackRef}>
      <h2>Tech Stack</h2>
      <TagList tags={skills} isForTechStack />
    </section>
  );
}
