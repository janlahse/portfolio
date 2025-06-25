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
  display: flex;
  justify-content: space-between;
  list-style: none;
  max-width: 400px;
  padding: 0;
  margin-top: 5px;
  font-size: 1.5em;
  & > li {
    transition: font-size 0.3s;
    &:hover {
      cursor: pointer;
      font-size: 1.5em;
    }
  }
`;
