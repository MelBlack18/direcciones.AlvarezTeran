import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/Place";
import * as FileSystem from "expo-file-system"
import { URL_GEOCODING } from "../constants/data/MAP";
import { insertPlace, getPlaces } from "../db";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      addImage(action.payload.image)

      const newPlace = new Place(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      )
      state.places.push(newPlace);
    },
    setPlaces: (state, action) => {
      state.places = action.payload
    }
  },
});

export const savePlace = (title, image, coords) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng))

      if (!response.ok) {
        throw new Error("No se ha podido conectar con el servicio de geolocalización")
      }

      const data = await response.json()
      if (!data.results) throw new Error("No se ha podido encontrar la dirección")

      const address = data.results[0].formatted_address

      const result = await insertPlace(title, image, address, coords)

      dispatch(addPlace({ id: result.insertId, title, image, address, coords }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try{
      const result = await getPlaces()
      dispatch(setPlaces(result?.rows?._array))
    } catch(error){
      console.log(error);
      throw error;
    }
  }
} 

const addImage = (image) => {

  return async (dispatch) => {
    const fileName = image.split('/').pop()
    const Path = FileSystem.documentDirectory + fileName

    try{
      FileSystem.moveAsync({
        from: image,
        to: Path
      })
    }catch(error){
      console.log(error.message)
      throw error
    }
  }

}


export const { addPlace, setPlaces } = placeSlice.actions;
export default placeSlice.reducer;