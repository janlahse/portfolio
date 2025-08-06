import Image from "next/image";
import styled from "styled-components";

export default function Art() {
  return (
    <ArtContainer>
      <ArtImage
        alt="3D depiction of a simplified person standing at the edge of a canyon"
        src="/projects/art/guy.png"
        width="1080"
        height="1080"
      />
      <ArtImage
        alt="abstract 3D art depicting multiple of the same spherical objects with a colorful pattern in different sizes"
        src="/projects/art/big.png"
        width="1920"
        height="1080"
      />
      <ArtImage
        alt="abstract 3D art depicting blue spheres in an ethereal void"
        src="/projects/art/wide_1.png"
        width="1080"
        height="1080"
      />
      <ArtImage
        alt="abstract 3D art depicting pink spheres in an ethereal void"
        src="/projects/art/wide_2.png"
        width="1080"
        height="1080"
      />
      <ArtImage
        alt="abstract 3D art depicting orange spheres in an ethereal void"
        src="/projects/art/wide_3.png"
        width="1080"
        height="1080"
      />
    </ArtContainer>
  );
}

const ArtContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ArtImage = styled(Image)`
  border-radius: 10px;
  height: 200px;
  width: auto;
  border: 1.5px solid #999;
  flex-grow: 1;
`;
