import { StyleSheet } from "react-native";
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    image:{
        height:"35%",
        minHeight: 300,
        width: "100%"
    },
    location: {
        margin: 20,
        width: "90%",
        maxWidth: 350,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10
    },
    addressContainer: {
        padding: 20
    },
    address:{
        color: THEME.colors.PINK,
        textAlign: "center"
    },
    map:{
        height: 300
    }
})