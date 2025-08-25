import styled from "styled-components";
import Tag from "./Tag";

export default function TagList({ tags, isForTechStack }) {
  return (
    <List $isForTechStack={isForTechStack}>
      {tags.map((tag) => (
        <Tag skill={tag} isForTechStack={isForTechStack} key={tag} />
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px 12px;
  ${(props) =>
    props.$isForTechStack && "justify-content: center; gap: 15px 20px;"}
  align-items: flex-start;
  padding: 0;
  margin-bottom: auto;
`;
