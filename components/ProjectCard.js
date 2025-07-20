import styled from "styled-components";
import TagList from "./TagList";
import ProjectThumbnail from "./ProjectThumbnail";
import VideoOverlay from "./VideoOverlay";

export default function ProjectCard({ project }) {
  return (
    <Card>
      <VideoOverlay source="/work.mp4" />
      <ProjectThumbnail project={project} />
      <Heading>{project.title}</Heading>
      <Description>{project.description}</Description>
      <Tags tags={project.tags} />
    </Card>
  );
}

const Card = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 70%;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: "image heading" "image description" "image tags";
  @media (max-width: 500px) {
    grid-template-columns: auto;
    grid-template-areas: "image" "heading" "description" "tags";
  }
`;

const Heading = styled.h3`
  grid-area: heading;
`;

const Description = styled.p`
  grid-area: description;
`;

const Tags = styled(TagList)`
  grid-area: tags;
`;
