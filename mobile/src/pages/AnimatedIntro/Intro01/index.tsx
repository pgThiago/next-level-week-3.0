import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { useNavigation, useIsFocused, useFocusEffect } from '@react-navigation/native';

import styles from './styles';

import mapMarker from '../../../images/map-marker-big.png';

const Intro01: React.FC = () => {

  const { navigate } = useNavigation(); 
  const isFocused = useIsFocused(); 

  useFocusEffect(() => {
    setTimeout(() => {
      navigate('Intro02');
    }, 1000);
  });

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#1CBCCE" barStyle="dark-content" />
      <Image source={mapMarker} />
    </View>
  );
};

export default Intro01;
