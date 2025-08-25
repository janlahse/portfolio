import styled from "styled-components";

export default function Tag({ skill, isForTechStack }) {
  return <StyledTag $isForTechStack={isForTechStack}>{skill}</StyledTag>;
}

const StyledTag = styled.li`
  border: 2px solid #333;
  background-color: #e0e0e0;
  list-style: none;
  padding: 4px 12px;
  border-radius: 30px;
  font-size: 0.9em;
  font-weight: bold;
  font-family: "Space Mono", monospace;
  ${(props) => props.$isForTechStack && "padding: 6px 14px; font-size: 1.1em; "}
`;
