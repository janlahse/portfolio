import { useState } from "react";
import ProjectsNav from "./ProjectsNav";
import Others from "./Others";
import ListedProjects from "./ListedProjects";
import { ProjectList } from "@/db/ProjectList";

export default function Projects({ projectsRef }) {
  const [isWebsites, setIsWebsites] = useState(true);
  return (
    <section ref={projectsRef}>
      <h2>Projects</h2>
      <ProjectsNav isWebsites={isWebsites} setIsWebsites={setIsWebsites} />
      {isWebsites ? (
        <ListedProjects projectList={ProjectList} projectType={"websites"} />
      ) : (
        <Others projectList={ProjectList} />
      )}
    </section>
  );
}
