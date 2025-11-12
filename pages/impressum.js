import styled from "styled-components";

export default function Impressum() {
  return (
    <>
      <Container>
        <section>
          <h2>Legal Disclosure / Impressum</h2>
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
        </section>
      </Container>
    </>
  );
}

const Container = styled.section`
  margin: 65px 15px 5px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  & > * {
    max-width: 800px;
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
    @media (min-width: 650px) {
      text-align: start;
    }
  }
`;
