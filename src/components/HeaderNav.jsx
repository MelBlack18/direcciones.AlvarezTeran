import {Text, TouchableOpacity} from 'react-native';
import React from 'react'
import {THEME} from '../constants/theme';
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';


const HeaderNav = ({navigate}) => {

  return (
    <TouchableOpacity onPress={navigate} style={styles.boton}>
        <FontAwesomeIcon icon={faSquarePlus} color={THEME.colors.CHERRY_BLOSSOM} />
    </TouchableOpacity>
  )
}

export default HeaderNav