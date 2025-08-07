import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import LinksOverlay from "./LinksOverlay";
import VideoOverlay from "./VideoOverlay";
import VideoOverlayProjectAugment from "./VideoOverlayProjectAugment";

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

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setShowVideo(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Thumbnail
      onClick={() =>
        project.type === "websites"
          ? setShowLinks(!showLinks)
          : setShowVideo(true)
      }
      $border={project.thumbnailBorder}
    >
      {showVideo && project.id === "project_augment" ? (
        <VideoOverlayProjectAugment ref={ref} />
      ) : (
        showVideo && <VideoOverlay source={project.video} ref={ref} />
      )}
      {project.type === "websites" && (
        <LinksOverlay ref={ref} showLinks={showLinks} />
      )}
      <CoverImage
        src={project.coverImage}
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
  ${(props) => props.$border && "border: 1.5px solid #999;"}
`;

const CoverImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  cursor: pointer;
`;
