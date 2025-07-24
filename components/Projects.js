import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsNav from "./ProjectsNav";
import Others from "./Others";

const ProjectList = [
  {
    title: "Virtual Pet Care",
    type: "websites",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    path: "/virtual_pet_care.PNG",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Work in Progress",
    type: "films",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    path: "/wip.PNG",
    tags: ["Blender"],
  },
];

export default function Projects({ projectsRef }) {
  const [isWebsites, setIsWebsites] = useState(true);
  return (
    <section ref={projectsRef}>
      <h2>Projects</h2>
      <ProjectsNav isWebsites={isWebsites} setIsWebsites={setIsWebsites} />
      {isWebsites ? (
        ProjectList.filter((project) => project.type == "websites").map(
          (project) => <ProjectCard key={project.title} project={project} />
        )
      ) : (
        <Others projectList={ProjectList} />
      )}
    </section>
  );
}
