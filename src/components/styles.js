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
    }
});