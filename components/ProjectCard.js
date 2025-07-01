import styled from "styled-components";
import TagList from "./TagList";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Card>
      <Cover href="https://virtual-pet-care.vercel.app/">
        <CoverImage
          src="/virtual_pet_care.png"
          alt={project.title + " Cover Image"}
          width={1080}
          height={1080}
        />
      </Cover>
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

const Cover = styled(Link)`
  grid-area: image;
`;

const CoverImage = styled(Image)`
  height: 100%;
  max-height: 200px;
  width: 100%;
  border: 1px solid #333;
  border-radius: 10px;
  object-fit: cover;
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
