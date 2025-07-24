import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import LinksOverlay from "./LinksOverlay";
import VideoOverlay from "./VideoOverlay";

export default function ProjectThumbnail({ project }) {
  const [showLinks, setShowLinks] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowLinks(false);
        setShowVideo(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setShowVideo(false);
    }
  });

  return (
    <Thumbnail
      onClick={() =>
        project.type === "websites"
          ? setShowLinks(!showLinks)
          : setShowVideo(true)
      }
    >
      {showVideo && <VideoOverlay source="/work.mp4" ref={ref} />}
      {project.type === "websites" && (
        <LinksOverlay ref={ref} showLinks={showLinks} />
      )}
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
  border: 1.5px solid #333;
`;

const CoverImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
