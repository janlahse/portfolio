import styled from "styled-components";
import { Lexend } from "next/font/google";
import NavBar from "./NavBar";

const lexend = Lexend({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <Container>
        <Logo className={lexend.className}>Jan Lahse</Logo>
        <NavBar />
      </Container>
    </>
  );
}

const Container = styled.section`
  position: fixed;
  width: 100%;
  padding: 5px 15px;
`;

const Logo = styled.h1`
  font-size: 2.5em;
  color: #222;
  border-bottom: 5px solid #222;
  text-align: center;
  @media (min-width: 415px) {
    text-align: left;
  }
`;
