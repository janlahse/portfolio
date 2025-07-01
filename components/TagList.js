import styled from "styled-components";
import Tag from "./Tag";

export default function TagList({ tags }) {
  return (
    <List>
      {tags.map((tag) => {
        return <Tag skill={tag} key={tag} />;
      })}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  margin-bottom: auto;
`;
