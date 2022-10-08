import { StyledControl } from "./Control.styled";
import PropTypes from "prop-types";
import {
  BtnRepeat,
  BtnPrev,
  BtnTogglePlay,
  BtnNext,
  BtnRandom,
  RepeatIcon,
  PrevIcon,
  PauseIcon,
  PlayIcon,
  NextIcon,
  RandomIcon,
  ProgressContain,
  ControlBtn,
} from "./Control.styled";

function Control({ item }) {
  return (
    <StyledControl>
      <ControlBtn>
        <BtnRepeat>
          <RepeatIcon />
        </BtnRepeat>
        <BtnPrev>
          <PrevIcon />
        </BtnPrev>
        <BtnTogglePlay>
          <PauseIcon />
          <PlayIcon />
        </BtnTogglePlay>
        <BtnNext>
          <NextIcon />
        </BtnNext>
        <BtnRandom>
          <RandomIcon />
        </BtnRandom>
      </ControlBtn>
      <ProgressContain>
        <input
          id="progress"
          className="progress"
          type="range"
          value="0"
          step="1"
          min="0"
          max="100"
        />
        <audio id="audio" src=""></audio>
      </ProgressContain>
    </StyledControl>
  );
}
Control.propTypes = {
  item: PropTypes.string,
};
export default Control;
