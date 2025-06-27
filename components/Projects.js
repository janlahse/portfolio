import { useState } from "react";
import styled from "styled-components";

export default function Projects() {
  const [projectType, setProjectType] = useState("websites");

  function handleClickWebsites() {
    if (projectType !== "websites") {
      setProjectType("websites");
    } else setProjectType("none");
  }

  function handleClickOther() {
    if (projectType !== "other") {
      setProjectType("other");
    } else setProjectType("none");
  }

  return (
    <section>
      <h2>Projects</h2>
      <Navigation>
        <NavigationItem
          onClick={handleClickWebsites}
          $isActive={projectType === "websites"}
        >
          Websites
        </NavigationItem>
        <NavigationItem
          onClick={handleClickOther}
          $isActive={projectType === "other"}
        >
          Other Projects
        </NavigationItem>
      </Navigation>
    </section>
  );
}

const Navigation = styled.ul`
  padding: 0;
  display: flex;
  gap: 30px;
  list-style: none;
  font-weight: bold;
  font-size: 1.3em;
`;

const NavigationItem = styled.li`
  cursor: pointer;
  border-bottom: 4px solid #f2f2f2;
  color: #555;
  ${(props) => props.$isActive && "color: #222; border-bottom: 4px solid #222;"}
`;
