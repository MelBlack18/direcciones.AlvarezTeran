import {StyleSheet} from 'react-native';
import { THEME } from '../constants/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boton:{
        width:"30%",
        height:"200%",
        alignItems:"center",
        justifyContent: 'center',
    },
    selectorContainer:{
      marginBottom: 10,
      width:"100%",
    },
    preview:{
      width:"100%",
      height: 200,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
      borderColor: THEME.colors.CHERRY_BLOSSOM,
      borderWidth: 1
    },
    image:{
      width: "100%",
      height:"100%"
    },
    placeItem: {
      borderBottomColor: THEME.colors.CHERRY_BLOSSOM,
      borderBottomWidth: 1,
      flexDirection: "row",
      alignItems:"center"
    },
    imageItem:{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: THEME.colors.DARK_PINK
    },
    info: {
      marginLeft: 25,
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start"
    },
    title: {
      color: THEME.colors.CHERRY_BLOSSOM,
      fontSize: 18,
      marginBottom: 6
    },
    address:{
      color: THEME.colors.CHERRY_BLOSSOM,
      fontSize: 16
    },
    mapPreview:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapImage:{
      width: "100%",
      height: "100%",
    }
});