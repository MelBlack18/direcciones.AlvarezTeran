import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlaceItem from '../../components/PlaceItem'
import { loadPlaces } from '../../store/place.slice'


const PlacesListScreen = ({navigation}) => {
  const dispatch = useDispatch()

  const places = useSelector(state => state.place.places)

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  return (
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={(data) => (<PlaceItem 
          title={data.item.title}
          image={data.item.image}
          address={data.item.address}
          onSelect={() => navigation.navigate("Dirección", { placeID: data.item.id})}
        />)}
      />
  )
}

export default PlacesListScreen