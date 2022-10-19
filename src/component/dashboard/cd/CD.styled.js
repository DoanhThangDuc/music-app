import styled from "styled-components";

export const StyledCD = styled.div`
  display: flex;
  margin: auto;
  width: 200px;
  height: 200px;
`;
export const StyledCDThumb = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  & img {
    position: absolute;
    z-index: -1;
    background: cover;
    width: 100%;
    height: 100%;
  }
`;
