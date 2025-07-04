import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Links>
        <Link href="https://github.com/janlahse">
          <Logo
            alt="GitHub Logo"
            src="/github_logo.png"
            width={240}
            height={240}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/jan-lahse/">
          <Logo
            alt="LinkedIn Logo"
            src="/linkedin_logo_blue.png"
            width={635}
            height={540}
          />
        </Link>
      </Links>
    </Container>
  );
}

const Container = styled.section`
  position: sticky;
  bottom: 0;
  margin: 0 15px 40px 15px;
  background-color: #f2f2f2;
  border-top: 5px solid #222;
  @media (min-width: 650px) {
    position: static;
    margin: 0 15px;
  }
`;

const Links = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  @media (min-width: 650px) {
    justify-content: flex-end;
  }
`;

const Logo = styled(Image)`
  width: 30px;
  height: 100%;
  margin: 5px 0 5.5px 0;
`;
