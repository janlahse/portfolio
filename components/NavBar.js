import styled from "styled-components";

export default function NavBar() {
  return (
    <Bar>
      <li>Projects</li>
      <li>About</li>
      <li>Stack</li>
      <li>Contact</li>
    </Bar>
  );
}

const Bar = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style: none;
  height: 35px;
  padding: 0;
  font-size: 1.5em;
  @media (min-width: 650px) {
    max-width: 400px;
  }
  & > li {
    transition: font-size 0.3s, transform 0.2s;
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
