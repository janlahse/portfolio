import styled from "styled-components";

export default function Tag({ skill }) {
  return <StyledTag>{skill}</StyledTag>;
}

const StyledTag = styled.li`
  border: 2px solid #444;
  background-color: #ddd;
  list-style: none;
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: bold;
  font-family: "Space Mono", monospace;
`;
