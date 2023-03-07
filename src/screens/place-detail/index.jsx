import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import MapPreview from '../../components/MapPreview'
import { useSelector } from 'react-redux'
import { styles } from './styles'

const PlaceDetailScreen = ({route}) => {
  const {placeID} = route.params
  const place = useSelector(state => state.place.places.find(items => items.id === placeID))

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: place.image}} style={styles.image} />

      <View style={styles.location}>

        <View style={styles.addressContainer}>
          <Text style={styles.address}> {place.address} </Text>
        </View>

        <MapPreview style={styles.map} location={{lat: place.lat, lng: place.lng}}>
          <Text> Ubicación no Disponible </Text>
        </MapPreview>

      </View>

    </ScrollView>
  )
}

export default PlaceDetailScreen