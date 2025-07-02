import styled from "styled-components";
import ExternalLinkIcon from "./ExternalLinkIcon";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProjectThumbnail({ project }) {
  const [showLinks, setShowLinks] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowLinks(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Thumbnail onClick={() => setShowLinks(!showLinks)}>
      <LinksOverlay ref={ref} $showLinks={showLinks}>
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
      <CoverImage
        src={project.path}
        alt={project.title + " Cover Image"}
        width={1080}
        height={1080}
      />
    </Thumbnail>
  );
}

const Thumbnail = styled.section`
  overflow: hidden;
  grid-area: image;
  border-radius: 10px;
  position: relative;
  max-height: 200px;
  border: 1px solid #333;
`;

const LinksOverlay = styled.ul`
  position: absolute;
  top: -100%;
  padding: 0;
  background-color: #f2f2f2;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  list-style: none;
  ${(props) => props.$showLinks && "transform: translate(0, 100%);"};
  transition: transform 0.5s ease;
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
`;
