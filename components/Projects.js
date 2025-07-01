import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsNav from "./ProjectsNav";

const ProjectList = [
  {
    title: "Virtual Pet Care",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    path: "/virtual_pet_care.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
];

export default function Projects() {
  const [isWebsites, setIsWebsites] = useState(true);
  return (
    <section>
      <h2>Projects</h2>
      <ProjectsNav isWebsites={isWebsites} setIsWebsites={setIsWebsites} />
      {isWebsites && <ProjectCard project={ProjectList[0]} />}
    </section>
  );
}
