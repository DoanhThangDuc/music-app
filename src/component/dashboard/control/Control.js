import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledControl } from "./Control.styled";
import {
  changeCurrentSongStatus,
  handleClickNext,
} from "../../../features/actions/actionsSlicer";
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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const playing = state.controls.playing;

  const handleClickNextBtn = () => {
    dispatch(handleClickNext(state.controls.idSongIsPlaying));
  };
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
            dispatch(changeCurrentSongStatus(!playing));
          }}
        >
          {playing === true ? (
            <PauseIcon play="true" />
          ) : (
            <PlayIcon play="true" />
          )}
        </BtnControlPlay>
        <BtnNext onClick={handleClickNextBtn}>
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
