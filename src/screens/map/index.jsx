import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import {THEME} from '../../constants/theme';

const MapScreen = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState()

  const initialRegion = {
    latitude: 37.4219023,
    longitude: -122.0839984,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const handleSelectLocation = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    })
  }

  const handleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate("Nueva Dirección", {mapLocation: selectedLocation})
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveLocation}>
          <FontAwesomeIcon icon={faFloppyDisk} color={THEME.colors.CHERRY_BLOSSOM} />
        </TouchableOpacity>
      )
    })
  })

  return (
    <MapView initialRegion={initialRegion} style={{flex:1}} onPress={handleSelectLocation}>
      {selectedLocation && (
        <Marker
          title='Ubicación Seleccionada'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
          }}
        />
      )}
    </MapView>
  )
}

export default MapScreen