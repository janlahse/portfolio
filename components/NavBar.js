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
    text-decoration: underline;
    text-decoration-color: #eee;
    transition: text-decoration 0.2s;
    &:hover {
      cursor: pointer;
      text-decoration-color: #222;
    }
  }
`;
