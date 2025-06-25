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
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f2f2f2;
`;

const Links = styled.section`
  border-top: 5px solid #222;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  @media (min-width: 415px) {
    justify-content: flex-end;
  }
`;

const Logo = styled(Image)`
  width: 30px;
  height: 100%;
  margin: 5px 0 5.5px 0;
`;
