import styled from "styled-components";

export default function NavBar({ isHeaderNav }) {
  return (
    <Bar $isHeaderNav={isHeaderNav}>
      <li>Projects</li>
      <li>About</li>
      <li>Stack</li>
      <li>Contact</li>
    </Bar>
  );
}

const Bar = styled.ul`
  position: fixed;
  inset: auto 15px 0 15px;
  z-index: 1;
  flex-grow: 1;
  display: ${(props) => (props.$isHeaderNav ? "none;" : "flex;")};
  justify-content: space-between;
  align-items: center;
  height: 45px;
  background-color: #f2f2f2;
  list-style: none;
  padding: 0 0 2px 0;
  font-size: 1.5em;
  @media (min-width: 650px) {
    display: ${(props) => (props.$isHeaderNav ? "flex;" : "none;")};
    max-width: 400px;
    align-items: flex-end;
    position: static;
    margin: 0;
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
