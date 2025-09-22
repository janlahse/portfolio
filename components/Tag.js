import styled from "styled-components";

export default function Tag({ skill, isForTechStack }) {
  return <StyledTag $isForTechStack={isForTechStack}>{skill}</StyledTag>;
}

const StyledTag = styled.li`
  border: 2px solid hsl(240, 52%, 52%);
  background-color: #fff;
  list-style: none;
  padding: 4px 12px;
  border-radius: 30px;
  font-size: 0.9em;
  font-weight: bold;
  font-family: "Space Mono", monospace;
  ${(props) => props.$isForTechStack && "padding: 6px 16px; font-size: 1em;"}
  @media(min-width: 650px) {
    ${(props) =>
      props.$isForTechStack && "padding: 8px 18px; font-size: 1.35em;"}
  }
`;
