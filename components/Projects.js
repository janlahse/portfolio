import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsNav from "./ProjectsNav";

export default function Projects() {
  const [isWebsites, setIsWebsites] = useState(true);
  return (
    <section>
      <h2>Projects</h2>
      <ProjectsNav isWebsites={isWebsites} setIsWebsites={setIsWebsites} />
      {isWebsites && <ProjectCard />}
    </section>
  );
}
