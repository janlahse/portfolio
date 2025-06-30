import styled from "styled-components";
import TagList from "./TagList";

export default function ProjectCard() {
  return (
    <Card>
      <PlaceHolder />
      <Heading>Virtual Pet Care</Heading>
      <Description>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Description>
      <Tags tags={["HTML", "CSS", "JavaScript"]} />
    </Card>
  );
}

const Card = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "image heading" "image description" "image tags";
  @media (max-width: 500px) {
    grid-template-columns: auto;
    grid-template-areas: "image" "heading" "description" "tags";
  }
`;

const PlaceHolder = styled.div`
  background-color: #fff;
  border: 2px solid #222;
  border-radius: 5px;
  grid-area: image;
  min-height: 100px;
  min-width: 100px;
  @media (max-width: 500px) {
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
