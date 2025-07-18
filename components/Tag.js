import styled from "styled-components";

export default function Tag({ skill }) {
  return <StyledTag>{skill}</StyledTag>;
}

const StyledTag = styled.li`
  border: 2px solid #333;
  background-color: #e0e0e0;
  list-style: none;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: bold;
  font-family: "Space Mono", monospace;
`;
