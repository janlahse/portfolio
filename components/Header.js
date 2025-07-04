import styled from "styled-components";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <Container>
        <Logo>Jan Lahse</Logo>
        <NavBar isHeaderNav={true} />
      </Container>
    </>
  );
}

const Container = styled.section`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 15px 0;
  border-bottom: 5px solid #222;
  background-color: #f2f2f2;
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const Logo = styled.h1`
  font-size: 2.5em;
  font-family: "Lexend", Helvetica;
  padding-top: 5px;
  color: #222;
  text-align: center;
  @media (min-width: 650px) {
    text-align: left;
  }
`;
