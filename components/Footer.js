import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Footer() {
  const router = useRouter();

  return (
    <Container $isImpressum={router.pathname === "/impressum"}>
      <Links>
        <ImpressumLink href="/impressum">Impressum</ImpressumLink>
        <Link href="https://github.com/janlahse">
          <Logo
            alt="GitHub Logo"
            src="/icons/github_logo.png"
            width={240}
            height={240}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/jan-lahse/">
          <Logo
            alt="LinkedIn Logo"
            src="/icons/linkedin_logo_blue.png"
            width={635}
            height={540}
          />
        </Link>
      </Links>
    </Container>
  );
}

const Container = styled.section`
  position: ${(props) => (props.$isImpressum ? "fixed" : "sticky")};
  ${(props) => props.$isImpressum && "width: calc(100% - 30px);"};
  bottom: 0;
  margin: 0 15px ${(props) => (props.$isImpressum ? "0px" : "40px")} 15px;
  background-color: #f2f2f2;
  border-top: 5px solid hsl(240, 65%, 60%);
  @media (min-width: 650px) {
    position: ${(props) => (props.$isImpressum ? "fixed" : "static")};
    margin: 0 15px;
  }
`;

const Links = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 650px) {
    justify-content: flex-end;
  }
`;

const ImpressumLink = styled(Link)`
  font-family: "Roboto", Helvetica;
  text-decoration: none;
  color: #555;
  font-size: 1.2em;
  font-weight: 350;
`;

const Logo = styled(Image)`
  width: 30px;
  height: 100%;
  margin: 5px 0 5.5px 0;
`;
