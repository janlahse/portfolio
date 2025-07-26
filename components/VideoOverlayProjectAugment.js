import { useEffect } from "react";
import styled from "styled-components";
import ExternalCloseIcon from "./ExternalCloseIcon";

export default function VideoOverlayProjectAugment({ ref }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Overlay>
      <ExternalCloseIcon />
      <VideoContainer ref={ref}>
        <FirstVideoNav>
          <option>Silva</option>
          <option>Tyra</option>
        </FirstVideoNav>
        <SecondVideoNav>
          <option>Silva</option>
          <option>Tyra</option>
        </SecondVideoNav>
        <Video autoPlay controlsList="nodownload" loop>
          <source
            src={"/projects/project_augment/silva_drill_idle.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
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

const VideoContainer = styled.section`
  z-index: 1;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  max-width: 90%;
`;

const FirstVideoNav = styled.select`
  grid-row: 1/2;
  grid-column: span 1;
  border-radius: 2px 0 0 0;
  font-family: inherit;
  font-size: 1.8em;
  padding: 5px;
  background-color: #f2f2f2;
  color: #222;
  appearance: none;
  border: none;
  &:hover {
    background-color: #ddd;
  }
`;

const SecondVideoNav = styled(FirstVideoNav)`
  border-radius: 0 2px 0 0;
`;

const Video = styled.video`
  grid-row: 2/3;
  grid-column: 1/3;
  max-height: calc(100vh - 160px);
  border-radius: 0 0 2px 2px;
  object-fit: cover;
`;
