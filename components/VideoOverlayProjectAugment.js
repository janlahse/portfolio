import { useEffect, useState } from "react";
import styled from "styled-components";
import ExternalCloseIcon from "./icons/CloseIcon";
import DropdownIcon from "./icons/DropdownIcon";
import { Characters } from "@/db/Characters";

export default function VideoOverlayProjectAugment({ ref }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [character, setCharacter] = useState(Characters[0]);

  return (
    <Overlay>
      <ExternalCloseIcon />
      <VideoContainer ref={ref}>
        <Dropdown>
          <FirstDropdownButton>
            Character
            <DropdownIcon />
          </FirstDropdownButton>
          <DropdownContent className="dropdownContent">
            {Characters.map((character) => (
              <DropdownButton
                key={character.name}
                onClick={() => setCharacter(character)}
              >
                {character.name}
              </DropdownButton>
            ))}
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <SecondDropdownButton>
            Animation
            <DropdownIcon />
          </SecondDropdownButton>
          <DropdownContent className="dropdownContent">
            <DropdownButton>Silva</DropdownButton>
            <DropdownButton>Tyra</DropdownButton>
          </DropdownContent>
        </Dropdown>
        <Video
          key={character.name}
          autoPlay
          playsInline
          controlsList="nodownload"
          loop
          height="1080"
          widht="1080"
        >
          <source src={character.animations[0].source} type="video/mp4" />
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
  background-color: #f2f2f2;
  border-radius: 3px;
`;

const Dropdown = styled.section`
  z-index: 2;
  position: relative;
  grid-row: 1/2;
  font-size: 1.8em;
  color: #222;
  &:hover .dropdownContent {
    display: flex;
  }
`;

const DropdownButton = styled.button`
  text-align: start;
  font-family: inherit;
  font-size: 1em;
  padding: 5px 10px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondDropdownButton = styled(FirstDropdownButton)`
  border-radius: 0 5px 0 0;
`;

const DropdownContent = styled.section`
  position: absolute;
  display: none;
  flex-direction: column;
  font-size: 0.8em;
  background-color: #f2f2f2;
  width: 100%;
`;

const Video = styled.video`
  grid-row: 2/3;
  grid-column: 1/3;
  max-height: calc(100vh - 160px);
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0 0 3px 3px;
  object-fit: cover;
`;
