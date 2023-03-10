import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppNavigator from './navigation/app';
import { init } from './db';

export default function App() {
    const [loaded] = useFonts({
        "MontserratBold" : require("../assets/fonts/Montserrat-Bold.ttf"),
        "MontserratExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
        "MontserratLight": require("../assets/fonts/Montserrat-Light.ttf"),
        "MontserratRegular" : require("../assets/fonts/Montserrat-Regular.ttf"),
        "MontserratSemiBold" : require("../assets/fonts/Montserrat-SemiBold.ttf")
    })

    init()
      .then(()=>{console.log("Database Initialised");})
      .catch((err)=>{
        console.log("Database failed to initialize")
        console.log(err.message);
      })

    if (!loaded) {
        return(
          <View style={styles.container}>
            <ActivityIndicator size="large" />
          </View>
        )
      }

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
}

