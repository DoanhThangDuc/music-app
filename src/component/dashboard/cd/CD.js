import { StyledCD, StyledCDThumb } from "./CD.styled";
import PropTypes from "prop-types";

function CD({ songImg }) {
  return (
    <StyledCD>
      <StyledCDThumb>
        <img
          src={songImg}
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
