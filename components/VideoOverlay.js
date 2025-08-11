import { useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "./icons/CloseIcon";

export default function VideoOverlay({ source, ref }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Overlay>
      <CloseIcon />
      <Video controls autoPlay playsInline controlsList="nodownload" ref={ref}>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Background />
    </Overlay>
  );
}

const Overlay = styled.section`
  position: fixed;
  width: 100vw;
  inset: 0;
  z-index: 2;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background-color: #222;
  opacity: 0.95;
`;

const Video = styled.video`
  z-index: 1;
  max-width: 90%;
  max-height: calc(100vh - 160px);
  grid-row: 2/3;
  border-radius: 2px;
  object-fit: cover;
`;
