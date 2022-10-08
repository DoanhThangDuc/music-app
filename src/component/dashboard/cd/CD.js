import { StyledCD, StyledCDThumb } from "./CD.styled";
import PropTypes from "prop-types";

function CD({ url }) {
  return (
    <StyledCD>
      <StyledCDThumb>
        <img
          src="https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
          alt="img"
        />
      </StyledCDThumb>
    </StyledCD>
  );
}
CD.propTypes = {
  url: PropTypes.string,
};
export default CD;
