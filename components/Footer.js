import Image from "next/image";
import styled from "styled-components";

/*
- github logo
- add links
- responsive
*/

export default function Footer() {
  return (
    <Container>
      <Links>
        <LinkedInLogo
          alt="LinkedIn Logo"
          src="/linkedin_logo.png"
          width={635}
          height={540}
        />
      </Links>
    </Container>
  );
}

const Container = styled.section`
  display: fixed;
  bottom: 0;
  position: fixed;
  width: 100%;
`;

const Links = styled.section`
  border-top: 5px solid #222;
  margin: 0 10px;
  display: flex;
  justify-content: flex-end;
`;

const LinkedInLogo = styled(Image)`
  width: 40px;
  height: auto;
  margin: 10px;
`;
