import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, AsyncStorage } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import SplashLogo from '../../../assets/splash.png';

import styles from './styles';
import axios from 'axios';

const SplashScreen: React.FC = () => {

  const { navigate } = useNavigation();

  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState('');

  const [ initialLocation, setInitialLocation ] = useState({
    initialLatitude: 0,
    initialLongitude: 0,
  });

  async function checksIfItIsTheFirstTimeUserIsUsingThisApp(){
    const isFirstTime = await AsyncStorage.getItem('firstTime');
    if(isFirstTime === 'true'){
      setTimeout(() => {
        navigate('OrphanagesMap');
      }, 7000);
    }
    else{
      setTimeout(() => {
        navigate('OnBoardingOne');
    }, 7000);
    }
  }      

  useFocusEffect(() => {
    checksIfItIsTheFirstTimeUserIsUsingThisApp();
  });

  useEffect(() => {
    async function getUserInitialPosition(){
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});

      const { latitude, longitude } = location.coords;

      setInitialLocation({
        initialLatitude: latitude,
        initialLongitude: longitude,
      });

    }

    getUserInitialPosition();

  }, [initialLocation.initialLatitude, initialLocation.initialLatitude]);

  useFocusEffect(() => {
    
    async function getUserCityName(){
      const userLocationInfo = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${initialLocation.initialLatitude}&longitude=${initialLocation.initialLongitude}&localityLanguage=pt-br`);
      const { administrative } = userLocationInfo.data.localityInfo;
      
      const city = administrative[6].name;
      const state = administrative[2].name;
      
      setCity(city);
      setState(state);

    }
    if(initialLocation.initialLatitude !== 0)
      getUserCityName();
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#11C0CB" barStyle="dark-content" />
      <Image source={SplashLogo} />
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.ufText}>{state}</Text>
    </View>
  );
};

export default SplashScreen;
