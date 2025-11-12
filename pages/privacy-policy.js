import Link from "next/link";
import styled from "styled-components";

export default function PrivacyPolicy() {
  return (
    <Container>
      <Header>Privacy Policy</Header>
      <p>
        In this privacy policy You will find all the necessary information to
        ensure both the safety of your personal data and transparency on how it
        is processed.
      </p>
      <SubHeader>Purpose and Type of Data collected</SubHeader>
      <p>
        This website is hosted using the service of the cloud hosting provider
        Vercel. To use their service Vercel collects personal data of this
        website&apos;s users in the USA.
        <br />
        <br />
        This personal data includes the visitor&apos;s IP address, location
        information derived from that IP address and system configuration
        information.
        <br />
        <br />
        You can find additional information on how Vercel collects, saves and
        processes personal data in{" "}
        <StyledLink href="https://vercel.com/legal/privacy-policy">
          their privacy policy.
        </StyledLink>
      </p>
      <SubHeader>Additional Information</SubHeader>
      <p>
        This website does not use cookies, and all Google Fonts are hosted
        locally. Therefore, no data is transmitted to Google.
      </p>
      <SubHeader>Legal Basis</SubHeader>
      <p>
        On this website your personal data is processed on the legal basis of
        article 6 paragraph 1 point f of the GDPR.
        <br />
        <br />
        As stated in this article the processing of personal data is lawful if
        it is necessary for the purposes of the legitimate interests pursued by
        the controller, unless such interests are overridden by the interests,
        fundamental rights, and freedoms of the data subject which require the
        protection of personal data.
      </p>
      <SubHeader>Your Rights</SubHeader>
      <p>
        To protect your personal data, you have various rights under the GDPR.
        <br />
        <br />
        You have the right to obtain information about your personal data, as
        well as the right to rectification, erasure, or restriction of
        processing. In addition, you have the right to request a copy of this
        data. You also have the right to lodge a complaint with a supervisory
        authority.
      </p>
      <SubHeader>Data Controller</SubHeader>
      <p>
        Below you will find the contact information of the person responsible
        for data protection on this website. If you have any questions or
        comments, please feel free to contact me:
        <br />
        <br />
        Jan Lahse
        <br />
        Buntentorsteinweg 386
        <br />
        28201 Bremen
        <br />
        Germany
        <br />
        <br />
        E-Mail: jan.lahse@gmx.de
        <br />
        Phone: +49 176 519 474 96
      </p>

      <HorizontalRule />

      <Header>Datenschutz&shy;erklärung</Header>
      <p>
        Um die Sicherheit Ihrer personenbezogenen Daten sowie Transparenz über
        deren Verarbeitung zu gewährleisten, finden Sie alle entsprechenden
        Informationen in dieser Datenschutzerklärung.
      </p>
      <SubHeader>Zweck und Art der erhobenen Daten</SubHeader>
      <p>
        Das Hosting dieser Website findet über den Cloud-Hosting Anbieter Vercel
        statt. Um diesen Service zu nutzen, werden von Vercel in den USA
        verschiedene Daten von Besuchern und Besucherinnen dieser Website
        verarbeitet.
        <br />
        <br />
        Zu den so verarbeiteten Daten gehören die IP-Adresse, von der IP-Adresse
        abgeleitete Standortinformationen sowie Informationen zur
        Systemkonfiguration.
        <br />
        <br />
        Weitere Informationen dazu, wie Vercel Daten erhebt, speichert und
        verarbeitet, finden Sie in{" "}
        <StyledLink href="https://vercel.com/legal/privacy-policy">
          deren Datenschutzerklärung.
        </StyledLink>
      </p>
      <SubHeader>Weiteres</SubHeader>
      <p>
        Diese Website verwendet keine Cookies und die verwendeten Google Fonts
        sind lokal eingebunden. Es werden also keine Daten an Google
        übermittelt.
      </p>
      <SubHeader>Rechtsgrundlage</SubHeader>
      <p>
        Die Verarbeitung Ihrer Daten auf dieser Website erfolgt auf Grundlage
        von Artikel 6 Absatz 1 Buchstabe f der DSGVO.
        <br />
        <br />
        Aus diesem geht hervor, dass die Verarbeitung personenbezogener Daten
        rechtmäßig ist, sollte dies zur Wahrung der berechtigten Interessen des
        Verantwortlichen erforderlich sein, sofern nicht die Interessen,
        Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz
        personenbezogener Daten erfordern, überwiegen.
      </p>
      <SubHeader>Rechtsbelehrung</SubHeader>
      <p>
        Zum Schutz Ihrer personenbezogenen Daten haben Sie diverse Rechte.
        <br />
        <br />
        Sie haben ein Recht auf Auskunft über Ihre personenbezogenen Daten,
        sowie ein Recht auf Berichtigung und Löschung oder Einschränkung der
        Verarbeitung dieser. Außerdem haben Sie das Recht, eine Kopie dieser
        Daten anzufordern. Darüber hinaus haben Sie ein Recht auf Beschwerde bei
        der entsprechenden Aufsichtsbehörde.
      </p>
      <SubHeader>Verantwortlicher für Datenschutz</SubHeader>
      <p>
        Nachstehend finden Sie die Kontaktinformationen des Verantwortlichen für
        den Datenschutz dieser Website. Bei Nachfragen und Hinweisen wenden Sie
        sich gerne an mich:
        <br />
        <br />
        Jan Lahse
        <br />
        Buntentorsteinweg 386
        <br />
        28201 Bremen
        <br />
        Deutschland
        <br />
        <br />
        E-Mail: jan.lahse@gmx.de
        <br />
        Telefon: +49 176 519 474 96
      </p>
    </Container>
  );
}

const Container = styled.section`
  padding: 65px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    width: 100%;
    max-width: 800px;
  }
`;

const Header = styled.h2`
  text-align: start;
  hyphens: manual;
`;

const SubHeader = styled.h3`
  padding: 35px 0 8px;
  font-size: 1.7em;
  text-align: start;
  font-weight: 400;
  @media (min-width: 650px) {
    text-align: left;
  }
`;

const StyledLink = styled(Link)`
  color: #111;
`;

const HorizontalRule = styled.hr`
  margin: 15px 0 40px;
`;
