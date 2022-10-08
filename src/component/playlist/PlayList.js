import React from "react";
import { StyledPlaylist } from "./PlayList.styled";
import Song from "./song/Song";
function PlayList() {
  return (
    <StyledPlaylist>
      <Song />
    </StyledPlaylist>
  );
}

export default PlayList;
