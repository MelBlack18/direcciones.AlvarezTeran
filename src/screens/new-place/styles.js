import {StyleSheet} from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 30
    },
    label: {
      fontSize: 20,
      marginBottom: 16
    },
    input: {
      borderBottomColor: THEME.colors.PINK,
      borderBottomWidth: 1,
      marginBottom: 16,
      width: "100%"
    }
});