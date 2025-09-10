import TagList from "./TagList";

const skills = [
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "JSON",
  "GitHub",
  "Vercel",
  "Unity",
  "Blender",
  "DaVinci Resolve",
];

export default function TechStack({ stackRef }) {
  return (
    <section ref={stackRef}>
      <h2>Tech Stack</h2>
      <TagList tags={skills} isForTechStack />
    </section>
  );
}
