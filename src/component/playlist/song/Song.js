import React from "react";
import {
  StyledSong,
  SongThumb,
  SongBody,
  SongOption,
  OptionIcon,
  SongComposor,
} from "./Song.styled";
import PropTypes from "prop-types";

function Song({ songs }) {
  return (
    // add avtive into StyledSong to active
    <StyledSong>
      {songs !== undefined &&
        songs.map((song) => (
          <SongBody>
            <SongThumb></SongThumb>
            <SongComposor>
              <h3>{song.name}</h3>
              <p>{song.singer}</p>
            </SongComposor>
            <SongOption>
              <OptionIcon />
            </SongOption>
          </SongBody>
        ))}

      <SongBody>
        <SongThumb></SongThumb>
        <SongComposor>
          <h3>Music name</h3>
          <p>Singer</p>
        </SongComposor>
        <SongOption>
          <OptionIcon />
        </SongOption>
      </SongBody>
    </StyledSong>
  );
}
Song.propTypes = {
  songs: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
  }),
};
export default Song;
