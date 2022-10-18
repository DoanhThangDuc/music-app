import { createSlice, current } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = [
  {
    id: 1,
    name: "Faded",
    singer: "Alan Walker",
    path: "/assets/music/Alan Walker - Faded Mp3 Song Download.mp3",
    image: "/assets/img/Alan-Walker-Faded-Mp3-Song-Download.jpg",
    isPlaying: true,
  },
  {
    id: 2,
    name: "Dark-Horse",
    singer: "Katy Perry",
    path: "/assets/music/Katy Perry - Dark Horse Mp3 Song Download Ft Juicy J.mp3",
    image: "/assets/img/Katy-Perry-Dark-Horse-Mp3-Song-Download-Ft-Juicy-J.jpg",
    isPlaying: false,
  },
  {
    id: 3,
    name: "River",
    singer: "Chalier Puth",
    path: "/assets/music/Charlie Puth - River (Lyrics).mp3",
    image: "/assets/img/river-chaliehalie.jpeg",
    isPlaying: false,
  },
];

export const songsSlicer = createSlice({
  name: "songsSlicer",
  initialState,
  reducers: {
    playAudio: (state, action) => {
      const songIsPlaying = state.find((song) => song.id === action.payload);
      if (!songIsPlaying) return state;
      const updateSongPlayingStatus = state.map((song) => {
        if (song.id === action.payload) {
          return { ...song, isPlaying: true };
        }
        return { ...song, isPlaying: false };
      });

      return updateSongPlayingStatus;
    },
  },
});

export const selectSongIsPlaying = createSelector(
  [(state) => state.songs], 
  (songs) => songs.find((song) => song.isPlaying === true)
);
export const { playAudio } = songsSlicer.actions;
export default songsSlicer.reducer;
