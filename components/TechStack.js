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
    <section>
      <h2>Tech Stack</h2>
      <TagList tags={skills} />
    </section>
  );
}
