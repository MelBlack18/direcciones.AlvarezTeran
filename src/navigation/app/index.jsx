import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import PlaceNavigator from '../placeNavigator'

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#FFF"
    }
}

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <PlaceNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator