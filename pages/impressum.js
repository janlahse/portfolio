import BackIcon from "@/components/icons/BackIcon";
import Link from "next/link";
import styled from "styled-components";

export default function Impressum() {
  return (
    <>
      <Link href="/">
        <BackIcon />
      </Link>
      <Container>
        <h1>Legal Disclosure / Impressum</h1>
        <br />
        <p>Jan Lahse</p>
        <p>Buntentorsteinweg 386</p>
        <p>28201 Bremen</p>
        <p>Germany / Deutschland</p>
        <br />
        <p>
          <b>E-Mail: </b>jan.lahse@gmx.de
        </p>
        <p>
          <b>Phone / Telefon: </b>+49 176 519 474 96
        </p>
      </Container>
    </>
  );
}

const Container = styled.section`
  margin: 10px 15px 55px;
  min-height: 50vh;
  line-height: 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 650px) {
  }
`;
