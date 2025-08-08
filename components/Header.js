import styled from "styled-components";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Header({ handleScroll }) {
  return (
    <>
      <Container>
        <LogoLink href="/">
          <Logo>Jan Lahse</Logo>
        </LogoLink>
        <NavBar isHeaderNav={true} handleScroll={handleScroll} />
      </Container>
    </>
  );
}

const Container = styled.section`
  z-index: 1;
  position: fixed;
  inset: 0 15px auto;
  border-bottom: 5px solid #222;
  background-color: #f2f2f2;
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
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
