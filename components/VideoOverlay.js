import { useEffect } from "react";
import styled from "styled-components";

export default function VideoOverlay({ source, ref }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Overlay>
      <Video controls controlsList="nodownload" ref={ref}>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Background />
    </Overlay>
  );
}

const Overlay = styled.section`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background-color: #222;
  opacity: 0.95;
`;

const Video = styled.video`
  max-width: 60vw;
  z-index: 1;
`;
