import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Footer() {
  const router = useRouter();

  return (
    <Container $path={router.pathname}>
      <Links>
        <LinkSection>
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
        </LinkSection>
        <LinkSection>
          <LegalLink href="/legal-disclosure">Legal Disclosure</LegalLink>
          <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>
        </LinkSection>
      </Links>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  position: ${(props) =>
    props.$path === "/legal-disclosure"
      ? "fixed"
      : props.$path === "/privacy-policy"
      ? "static"
      : "sticky"};
  ${(props) =>
    props.$path === "/legal-disclosure" && "width: calc(100% - 30px);"};
  bottom: ${(props) => (props.$path === "/legal-disclosure" ? "0px" : "-27px")};
  margin: 0 15px ${(props) => (props.$path === "/" ? "40px" : "0px")} 15px;
  background-color: #f2f2f2;
  border-top: 5px solid hsl(240, 65%, 60%);
  @media (min-width: 650px) {
    position: ${(props) =>
      props.$path === "/legal-disclosure" ? "fixed" : "static"};
    margin: 0 15px;
  }
`;

const Links = styled.section`
  margin: 6px 0 9px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 650px) {
    align-items: flex-end;
  }
`;

const LinkSection = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LegalLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-size: 1.2em;
  font-weight: 400;
`;

const Logo = styled(Image)`
  width: 30px;
  height: 100%;
`;
