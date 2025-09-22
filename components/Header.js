import styled from "styled-components";
import NavBar from "./NavBar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ handleScroll }) {
  const router = useRouter();

  return (
    <>
      <Container>
        {router.pathname === "/impressum" ? (
          <LogoLink href="/">
            <Logo>Jan Lahse</Logo>
          </LogoLink>
        ) : (
          <>
            <Logo onClick={() => handleScroll("landing")}>Jan Lahse</Logo>
            <NavBar isHeaderNav={true} handleScroll={handleScroll} />
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.section`
  z-index: 1;
  position: fixed;
  inset: 0 15px auto;
  border-bottom: 5px solid hsl(240, 65%, 60%);
  background-color: #f2f2f2;
  padding: 0 calc((100vw - 845px) / 2);
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
  cursor: pointer;
  @media (min-width: 650px) {
    text-align: left;
  }
`;
