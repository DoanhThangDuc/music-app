import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idSongIsPlaying: 1,
  randomSong: false,
  playing: false,
};

export const actionsSlicer = createSlice({
  name: "actionsSlicer",
  initialState,
  reducers: {
    changeCurrentSongId: (state, action) => {
      return { ...state, idSongIsPlaying: action.payload };
    },
    changeCurrentSongStatus: (state, action) => {
      return { ...state, playing: action.payload };
    },
    handleClickNext: (state, action) => {
      return { ...state, idSongIsPlaying: action.payload + 1 };
    },
  },
});
export const { changeCurrentSongId, changeCurrentSongStatus, handleClickNext } =
  actionsSlicer.actions;
export default actionsSlicer.reducer;
