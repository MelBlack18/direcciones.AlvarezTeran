import { View, Text, Button, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import * as ImagePicker from "expo-image-picker"

const ImageSelector = ({onImage}) => {

    const [pickedUri, setPickedUri] = useState(null)

    const verifyPermissions = async () => {
       const { status } = await ImagePicker.requestCameraPermissionsAsync()

       if (status !== 'granted') {
           Alert.alert("Permisos Insuficientes", "Necesita habilitar los permisos par usar la aplicación", [{text: "OK"}])
           return false
       }

       return true
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk) return 

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8
        })

        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
    }

    return (
        <View>
            <View style={styles.preview}>{
                !pickedUri ? (
                    <Text>No hay imagen seleccionada</Text>
                ) : (
                    <Image style={styles.image} source={{uri:pickedUri}} />
                )
            }</View>
            <Button 
                title='Sacar Foto'
                onPress={handlerTakeImage}
            />
        </View>
    )
}

export default ImageSelector