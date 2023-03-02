import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { THEME } from '../../constants/theme'
import { useDispatch } from 'react-redux'

import ImageSelector from '../../components/ImageSelector'
import { savePlace } from '../../store/place.slice'

const NewPlaceScreen = ({navigation}) => {
  dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState(null);

  const handleTitleChange = text => setTitle(text)

  const handleSubmit = () => {
    dispatch(savePlace(title, image))
    navigation.navigate("Direcciones")
  }

  const onImage = (uri) => {
    setImage(uri)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Ingrese una nueva dirección</Text>
        <TextInput 
          placeholder='Calle Falsa 123'  
          style={styles.input}
          onChangeText={handleTitleChange} 
        />
        <ImageSelector onImage={onImage} />
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