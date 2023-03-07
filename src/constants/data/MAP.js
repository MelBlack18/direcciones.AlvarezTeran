export const MAP = {
    API_KEY: "AIzaSyAajBs35PHorLPuBIU0HIi7SmL3O6LW6Uc"
}

export const URL_GEOCODING = (lat, lng) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAP.API_KEY}`;