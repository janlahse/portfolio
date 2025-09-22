import styled from "styled-components";

export default function NavBar({ isHeaderNav, handleScroll }) {
  return (
    <Bar $isHeaderNav={isHeaderNav}>
      <li onClick={() => handleScroll("projects")}>Projects</li>
      <li onClick={() => handleScroll("about")}>About</li>
      <li onClick={() => handleScroll("stack")}>Stack</li>
      <li onClick={() => handleScroll("contact")}>Contact</li>
    </Bar>
  );
}

const Bar = styled.ul`
  position: fixed;
  inset: auto 0 0;
  padding: 0 15px 2px;
  z-index: 1;
  flex-grow: 1;
  display: ${(props) => (props.$isHeaderNav ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  height: 45px;
  background-color: #f2f2f2;
  list-style: none;
  font-size: 1.5em;
  font-weight: 400;
  @media (min-width: 650px) {
    display: ${(props) => (props.$isHeaderNav ? "flex" : "none")};
    max-width: 400px;
    align-items: flex-end;
    position: static;
    padding: 0 0 2px;
  }
  & > li {
    transition: font-size 0.3s ease, transform 0.2s ease;
    padding-bottom: 1px;
    &:hover {
      cursor: pointer;
      font-size: 1.5em;
    }
    &:active {
      transform: scale(0.92);
    }
  }
`;
