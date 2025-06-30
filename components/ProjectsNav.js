import { useState } from "react";
import styled from "styled-components";

export default function ProjectsNav() {
  const [isWebsites, setIsWebsites] = useState(true);
  const [otherType, setOtherType] = useState("films");
  return (
    <>
      <Navigation>
        <NavigationItem
          onClick={() => setIsWebsites(true)}
          $isActive={isWebsites}
        >
          Websites
        </NavigationItem>
        <NavigationItem
          onClick={() => setIsWebsites(false)}
          $isActive={!isWebsites}
        >
          Other
        </NavigationItem>
      </Navigation>

      {!isWebsites && (
        <Navigation>
          <NavigationItem
            onClick={() => setOtherType("films")}
            $isActive={otherType === "films"}
          >
            Films
          </NavigationItem>
          <NavigationItem
            onClick={() => setOtherType("games")}
            $isActive={otherType === "games"}
          >
            Games
          </NavigationItem>
          <NavigationItem
            onClick={() => setOtherType("art")}
            $isActive={otherType === "art"}
          >
            Art
          </NavigationItem>
        </Navigation>
      )}
    </>
  );
}

const Navigation = styled.ul`
  padding: 0;
  margin: 0 20%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  font-weight: bold;
  font-size: 1.3em;
`;

const NavigationItem = styled.li`
  cursor: pointer;
  border-bottom: 4px solid #f2f2f2;
  border-radius: 20px;
  padding: 5px 10px;
  ${(props) => props.$isActive && "background-color:#ddd; "}
  transition: transform 0.2s;
  &:active {
    transform: scale(0.92);
  }
`;
