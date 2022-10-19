import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentSongId,
  changeCurrentSongStatus,
} from "../../../features/actions/actionsSlicer";
import {
  StyledSong,
  SongThumb,
  SongBody,
  SongOption,
  OptionIcon,
  SongComposor,
} from "./Song.styled";

function Song() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const currentSong = state.songs.find(
    (song) => state.controls.idSongIsPlaying === song.id
  );
  const initialAudio = new Audio(currentSong.path);
  const currentSongRef = useRef(initialAudio);

  const handleControlSong = (id) => {
    if (!id) return;
    const availableSong = state.songs.find((song) => song.id === id);
    if (!availableSong) return;

    // if there has song is playing
    if (currentSongRef.current) {
      currentSongRef.current.pause();
    }
    // if there is no song is playing
    currentSongRef.current = new Audio(availableSong.path);
    currentSongRef.current.play();

    dispatch(changeCurrentSongId(id));
    dispatch(changeCurrentSongStatus(true));
  };

  // handle click on play button
  useEffect(() => {
    if (currentSongRef.current === null) return;
    if (state.controls.playing === true) {
      currentSongRef.current.play();
      return;
    }
    currentSongRef.current.pause();
  }, [state.controls.playing]);

  useEffect(() => {
    if (currentSongRef.current === null) return;
    const nextSong = state.songs.find(
      (song) => state.controls.idSongIsPlaying === song.id
    );
    console.log(state.controls.idSongIsPlaying)
    // currentSongRef.current = new Audio(nextSong.path);
  }, [state.controls.idSongIsPlaying]);

  return (
    <StyledSong>
      {state.songs.map((song) => {
        return (
          <SongBody key={song.id} onClick={() => handleControlSong(song.id)}>
            <audio />
            <SongThumb src={song.image} />
            <SongComposor>
              <h3>{song.name}</h3>
              <p>{song.singer}</p>
            </SongComposor>
            <SongOption>
              <OptionIcon />
            </SongOption>
          </SongBody>
        );
      })}
    </StyledSong>
  );
}
export default Song;
