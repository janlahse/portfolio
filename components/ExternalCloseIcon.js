import styled from "styled-components";

export default function ExternalCloseIcon() {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.878 122.88">
      <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
    </Icon>
  );
}

const Icon = styled.svg`
  width: 40px;
  min-height: 40px;
  justify-self: end;
  margin: 20px;
  fill: #f2f2f2;
  z-index: 2;
  cursor: pointer;
`;
