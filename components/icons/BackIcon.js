import styled from "styled-components";

export default function BackIcon() {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.91 122.88">
      <path d="M64.96,111.2c2.65,2.73,2.59,7.08-0.13,9.73c-2.73,2.65-7.08,2.59-9.73-0.14L1.97,66.01l4.93-4.8l-4.95,4.8 c-2.65-2.74-2.59-7.1,0.15-9.76c0.08-0.08,0.16-0.15,0.24-0.22L55.1,2.09c2.65-2.73,7-2.79,9.73-0.14 c2.73,2.65,2.78,7.01,0.13,9.73L16.5,61.23L64.96,111.2L64.96,111.2L64.96,111.2z" />
    </Icon>
  );
}

const Icon = styled.svg`
  position: fixed;
  top: 85px;
  left: 30px;
  width: 20px;
  height: auto;
  fill: #222;
  cursor: pointer;
`;
