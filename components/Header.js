import styled from "styled-components";
import NavBar from "./NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { Lexend } from "@next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["700"],
  fallback: ["Helvetica"],
});

export default function Header({ handleScroll }) {
  const router = useRouter();

  return (
    <>
      <Container>
        {router.pathname === "/legal-disclosure" ||
        router.pathname === "/privacy-policy" ? (
          <LogoLink href="/">
            <Logo className={lexend.className}>Jan Lahse</Logo>
          </LogoLink>
        ) : (
          <>
            <Logo
              className={lexend.className}
              onClick={() => handleScroll("landing")}
            >
              Jan Lahse
            </Logo>
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
  padding-top: 5px;
  color: #222;
  text-align: center;
  transition: color 0.1s;
  cursor: pointer;
  &:hover {
    color: hsl(240, 52%, 52%);
  }
  @media (min-width: 650px) {
    text-align: left;
  }
`;
