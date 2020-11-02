import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SplashLogo from '../../../assets/splash.png';

import styles from './styles';

const SplashScreen: React.FC = () => {

  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('OnBoardingOne');
    }, 3000);
  }, []);
 
  return (
    <>
      <StatusBar backgroundColor="#11C0CB" barStyle="dark-content" />
      <View style={styles.container}>
        <Image source={SplashLogo} />
        <Text style={styles.cityText}>Rio do Sul</Text>
        <Text style={styles.ufText}>Santa Catarina</Text>
      </View>
    </>
  );  
};

export default SplashScreen;
