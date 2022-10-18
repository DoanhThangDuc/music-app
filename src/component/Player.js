import React from "react";
import Dashboard from "./dashboard/Dashboard";
import PlayList from "./playlist/PlayList";
import { StyledPlayer } from "./Player.styled";
function Player() {
  return (
    <StyledPlayer>
      <Dashboard />
      <PlayList  />  
    </StyledPlayer>
  );
}

export default Player;
