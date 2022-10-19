import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./features/songs/songsSlicer";
import actionsSlicer from "./features/actions/actionsSlicer";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    controls: actionsSlicer,
  },
});

export default store;
