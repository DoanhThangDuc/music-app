import Header from "./header/Header";
import CD from "./cd/CD";
import { StyledDashboard } from "./Dashboard.styled.js";
import Control from "./control/Control";
import {  useSelector } from "react-redux";
function Dashboard() {
  const state = useSelector((state) => state);
  const currentSong = state.songs.find(
    (song) => state.controls.idSongIsPlaying === song.id
  );
  return (
    <StyledDashboard>
      <Header songName={currentSong.name} />
      <CD songImg={currentSong.image} />
      <Control />
    </StyledDashboard>
  );
}

export default Dashboard;
