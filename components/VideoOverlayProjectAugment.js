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
        <Dropdown>
          <FirstDropdownButton>Character</FirstDropdownButton>
          <DropdownContent className="dropdownContent">
            <DropdownButton>Silva</DropdownButton>
            <DropdownButton>Tyra</DropdownButton>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <SecondDropdownButton>Animation</SecondDropdownButton>
          <DropdownContent className="dropdownContent">
            <DropdownButton>Silva</DropdownButton>
            <DropdownButton>Tyra</DropdownButton>
          </DropdownContent>
        </Dropdown>
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

const Dropdown = styled.section`
  z-index: 2;
  position: relative;
  grid-row: 1/2;
  font-size: 1.8em;
  color: #222;
  border: none;
  &:hover .dropdownContent {
    display: flex;
  }
`;

const DropdownButton = styled.button`
  text-align: start;
  font-family: inherit;
  font-size: 1em;
  padding: 5px;
  background-color: #f2f2f2;
  color: #222;
  border: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const FirstDropdownButton = styled(DropdownButton)`
  cursor: unset;
  border-radius: 5px 0 0 0;
`;

const SecondDropdownButton = styled(FirstDropdownButton)`
  border-radius: 0 5px 0 0;
`;

const DropdownContent = styled.section`
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: #f2f2f2;
  color: #222;
  width: 100%;
`;

const Video = styled.video`
  grid-row: 2/3;
  grid-column: 1/3;
  max-height: calc(100vh - 160px);
  width: 100%;
  border-radius: 0 0 3px 3px;
  object-fit: cover;
`;
