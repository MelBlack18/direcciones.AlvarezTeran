import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const PlaceItem = ({title, image, address, onSelect}) => {

    return (
        <TouchableOpacity style={styles.placeItem} onPress={onSelect}>
            <Image style={styles.imageItem} source={{uri: image}} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem