import styled from "styled-components";
import OthersNav from "./Others";

export default function ProjectsNav({ isWebsites, setIsWebsites }) {
  return (
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
  );
}

const Navigation = styled.ul`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  list-style: none;
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 10px;
`;

const NavigationItem = styled.li`
  cursor: pointer;
  border-bottom: 4px solid #f2f2f2;
  border-radius: 20px;
  padding: 5px 10px;
  ${(props) => props.$isActive && "background-color:#ddd; "}
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.92);
  }
`;
