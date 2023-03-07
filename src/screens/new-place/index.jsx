import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { THEME } from '../../constants/theme'
import { useDispatch } from 'react-redux'

import ImageSelector from '../../components/ImageSelector'
import { savePlace } from '../../store/place.slice'
import LocationSelector from '../../components/LocationSelector'

const NewPlaceScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);

  const handleTitleChange = text => setTitle(text)

  const handleSubmit = () => {
    dispatch(savePlace(title, image, coords))
    navigation.navigate("Direcciones")
  }

  const onImage = (uri) => {
    setImage(uri)
  }

  const onLocation = (location) => {
    setCoords(location)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Ingrese el nombre de la dirección</Text>
        <TextInput 
          placeholder='Casa'  
          style={styles.input}
          onChangeText={handleTitleChange} 
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button 
          title='Guardar' 
          color={THEME.colors.DARK_PINK} 
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  )
}

export default NewPlaceScreen