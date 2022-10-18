import { useState } from "react";
import { StyledControl } from "./Control.styled";
import PropTypes from "prop-types";
import {
  BtnRepeat,
  BtnPrev,
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
  BtnControlPlay,
} from "./Control.styled";

function Control({ item }) {
  const [playBtn, setPlayBtn] = useState(false);

  return (
    <StyledControl>
      <ControlBtn>
        <BtnRepeat>
          <RepeatIcon />
        </BtnRepeat>
        <BtnPrev>
          <PrevIcon />
        </BtnPrev>
        <BtnControlPlay
          onClick={() => {
            setPlayBtn(!playBtn);
          }}
        >
          {playBtn === true ? (
            <PlayIcon play="true" />
          ) : (
            <PauseIcon play="true" />
          )}
        </BtnControlPlay>
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
          type="range"
          // value="0"
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
