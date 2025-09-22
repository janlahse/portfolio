import { useState } from "react";
import styled from "styled-components";
import ListedProjects from "./ListedProjects";
import Art from "./Art";

export default function Others({ projectList }) {
  const [otherType, setOtherType] = useState("games");
  return (
    <>
      <Navigation>
        <NavigationItem
          onClick={() => setOtherType("games")}
          $isActive={otherType === "games"}
        >
          Games
        </NavigationItem>
        <NavigationItem
          onClick={() => setOtherType("films")}
          $isActive={otherType === "films"}
        >
          Films
        </NavigationItem>
        <NavigationItem
          onClick={() => setOtherType("art")}
          $isActive={otherType === "art"}
        >
          Art
        </NavigationItem>
      </Navigation>
      {otherType === "art" ? (
        <Art />
      ) : (
        <ListedProjects projectList={projectList} projectType={otherType} />
      )}
    </>
  );
}

const Navigation = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  font-weight: 500;
  font-size: 1.3em;
  margin-bottom: 10px;
  @media (min-width: 650px) {
    justify-content: flex-start;
  }
`;

const NavigationItem = styled.li`
  cursor: pointer;
  border-bottom: 4px solid #f2f2f2;
  border-radius: 20px;
  padding: 5px 10px;
  ${(props) => props.$isActive && "background-color: #D1D1FF; "}
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.92);
  }
`;
