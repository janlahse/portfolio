import styled from "styled-components";
import ProjectCard from "./ProjectCard";

export default function ListedProjects({ projectList, projectType }) {
  return (
    <List>
      {projectList
        .filter((project) => project.type == projectType)
        .map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
    </List>
  );
}
const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
