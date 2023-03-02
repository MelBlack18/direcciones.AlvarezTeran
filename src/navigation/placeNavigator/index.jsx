import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { MapScreen, NewPlaceScreen, PlaceDetailScreen, PlacesListScreen } from '../../screens'
import { THEME } from '../../constants/theme'
import HeaderNav from '../../components/HeaderNav'

const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => {
  return (
    <PlaceStack.Navigator
        screenOptions={{
          headerStyle: {
              backgroundColor: THEME.colors.DARK_PINK
          },
          headerTintColor: THEME.colors.CHERRY_BLOSSOM,
          headerTitleStyle: {
              fontWeight: 'bold',
          }
      }}>
        <PlaceStack.Screen 
          name="Direcciones" 
          component={PlacesListScreen} 
          options={({navigation}) => ({
            title:'Direcciones',
            headerRight: () => (
              <HeaderNav navigate={() => navigation.navigate("Nueva Dirección")} />
            )
          })}
        />
        <PlaceStack.Screen name="Dirección" component={PlaceDetailScreen} />
        <PlaceStack.Screen name="Nueva Dirección" component={NewPlaceScreen} /> 
        <PlaceStack.Screen name="Mapa" component={MapScreen} />
    </PlaceStack.Navigator>
  )
}

export default PlaceNavigator