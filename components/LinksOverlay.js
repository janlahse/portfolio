import Link from "next/link";
import styled from "styled-components";
import ExternalLinkIcon from "./ExternalLinkIcon";
import Image from "next/image";

export default function LinksOverlay({ ref, showLinks }) {
  return (
    <Overlay ref={ref} $showLinks={showLinks}>
      <li>
        <Link href="https://virtual-pet-care.vercel.app/">
          <ExternalLinkIcon />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/janlahse/capstone-project">
          <Logo
            alt="GitHub Logo"
            src="/icons/github_logo.png"
            width={240}
            height={240}
          />
        </Link>
      </li>
    </Overlay>
  );
}

const Overlay = styled.ul`
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
