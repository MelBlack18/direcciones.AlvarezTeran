import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/Place";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        Date.now().toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export const savePlace = (title, image) => {
  return async (dispatch) => {
    try {
      dispatch(addPlace({ title, image }));
    } catch (error) {
      console.log(error);
    }
  };
};

export default placeSlice.reducer;
