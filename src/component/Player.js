import React from "react";
import Dashboard from "./dashboard/Dashboard";
import { StyledPlayer } from "./Player.styled";
import PlayListContainer from "../container/PlayListContainer";

function Player() {
  return (
    <StyledPlayer>
      <Dashboard />
      <PlayListContainer />
    </StyledPlayer>
  );
}

export default Player;
