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
  padding: 10px;
`;

const Logo = styled.h1`
  font-size: 2.5em;
  padding: 0;
  color: #222;
  border-bottom: 5px solid #222;
`;
