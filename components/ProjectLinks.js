import styled from "styled-components";
import ExternalLinkIcon from "./ExternalLinkIcon";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ProjectsLinks({ project }) {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <CoverSection onClick={() => setShowLinks(!showLinks)}>
      {showLinks && (
        <LinksOverlay>
          <li>
            <Link href="https://virtual-pet-care.vercel.app/">
              <ExternalLinkIcon />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/janlahse/capstone-project">
              <Logo
                alt="GitHub Logo"
                src="/github_logo.png"
                width={240}
                height={240}
              />
            </Link>
          </li>
        </LinksOverlay>
      )}
      <CoverImage
        src={project.path}
        alt={project.title + " Cover Image"}
        width={1080}
        height={1080}
      />
    </CoverSection>
  );
}

const CoverSection = styled.section`
  grid-area: image;
  border-radius: 10px;
  position: relative;
  max-height: 200px;
`;

const LinksOverlay = styled.ul`
  position: absolute;
  padding: 0;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #333;
  transition: opacity 0.3s;
  list-style: none;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logo = styled(Image)`
  width: 30px;
  height: 100%;
`;

const CoverImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid #333;
`;
