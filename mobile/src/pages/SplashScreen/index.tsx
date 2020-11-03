import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import { useNavigation, useIsFocused, useFocusEffect } from '@react-navigation/native';
import SplashLogo from '../../../assets/splash.png';

import styles from './styles';
import { useEffect } from 'react';

const SplashScreen: React.FC = () => {

  const { navigate } = useNavigation();

  const isFocused = useIsFocused();

  useFocusEffect(() => {
    setTimeout(() => {
      navigate('OnBoardingOne');
    }, 2000);
  });
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#11C0CB" barStyle="dark-content" />
        <Image source={SplashLogo} />
        <Text style={styles.cityText}>Rio do Sul</Text>
        <Text style={styles.ufText}>Santa Catarina</Text>
      </View>
  );  
};

export default SplashScreen;
