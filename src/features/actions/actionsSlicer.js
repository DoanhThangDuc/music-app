import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nextSong: false,
  prevSong: false,
  redoSong: false,
  randomSong: false,
};
export const actionsSlicer = createSlice({
  name: "actionsSlicer",
  initialState,
  reducers: {
   
  },
});

export default actionsSlicer.reducer;
