import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  playAudio,
  selectSongIsPlaying,
} from "../../../features/songs/songsSlicer";
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
  const songIsPlaying = selectSongIsPlaying(state);

  
  const handleControlSong = (id) => {
    const availableSong = state.songs.find((song) => song.id === id);
    
    dispatch(playAudio(id));
    console.log(songIsPlaying)
  };

  return (
    <StyledSong>
      {state.songs.map((song) => {
        return (
          <SongBody key={song.id} onClick={() => handleControlSong(song.id)}>
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
