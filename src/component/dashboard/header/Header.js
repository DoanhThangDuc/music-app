import { StyledHeader } from "./Header.styled.js";
function Header({ songName }) {
  return (
    <StyledHeader>
      <h4>Now playing:</h4>
      <h2>{songName}</h2>
    </StyledHeader>
  );
}
export default Header;
