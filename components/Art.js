import Image from "next/image";
import styled from "styled-components";

export default function Art() {
  return (
    <ArtContainer>
      <video autoPlay playsInline loop height="1080" widht="1080">
        <source src="/projects/art/ball.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        alt="abstract 3D art depicting multiple of the same spherical objects with a colorful pattern in different sizes"
        src="/projects/art/big.png"
        width="1920"
        height="1080"
      />
      <Image
        alt="3D depiction of a simplified person standing at the edge of a canyon"
        src="/projects/art/guy.png"
        width="1080"
        height="1080"
      />
      <video autoPlay playsInline loop height="1080" widht="1080">
        <source src="/projects/art/cube.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        alt="abstract 3D art depicting blue spheres in an ethereal void"
        src="/projects/art/wide_1.png"
        width="1080"
        height="1080"
      />
      <Image
        alt="abstract 3D art depicting pink spheres in an ethereal void"
        src="/projects/art/wide_2.png"
        width="1080"
        height="1080"
      />
      <Image
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
  gap: 15px;
  & > * {
    border-radius: 10px;
    flex: 1 0 auto;
    height: auto;
    width: 30%;
    object-fit: cover;
    &:nth-child(2) {
      width: 60%;
    }
    &:nth-child(3) {
      width: 45%;
      transform: scaleX(-1);
    }
    &:nth-child(4) {
      width: 45%;
    }
    &:nth-child(n + 5) {
      width: 30%;
    }
  }
`;
