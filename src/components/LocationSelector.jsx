import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapPreview from './MapPreview'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'

const LocationSelector = (props) => {
    const navigation = useNavigation()
    const route = useRoute()
    const [pickedLocation, setPickedLocation] = useState("")

    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync()

        if (status !== "granted"){
            Alert.alert(
                "Permisos Insuficientes",
                "Necesita dar permisos de localización a la App",
                [{text: "OK"}]
            )

            return false
        }

        return true
    }

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions()
        
        if (!isLocationOk) return

        const location = await Location.getCurrentPositionAsync({
            timeout:5000
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })

        props.onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }

    const handlePickOnMap = async() => {
        const isLocationOk =  await verifyPermissions()
        if (!isLocationOk) return

        navigation.navigate("Mapa")
    }

    const mapLocation = route?.params?.mapLocation

    useEffect(() => {
        if (mapLocation){
            setPickedLocation(mapLocation)
            props.onLocation(mapLocation)
        }
    }, [mapLocation])

    return (
        <View style={styles.selectorContainer}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text>Buscando Ubicación...</Text>
            </MapPreview>
            <Button
                title='Obtener Ubicación'
                onPress={handleGetLocation} 
            />
            <Button 
                title="Elegir del Mapa"
                onPress={handlePickOnMap}
            />
        </View>
    )
}

export default LocationSelector