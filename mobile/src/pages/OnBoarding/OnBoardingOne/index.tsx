import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Ilustra01 from '../../../images/ilustra01.png';

import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const OnBoardingOne: React.FC = () => {

  const { navigate } = useNavigation();

  function goToOnboardingTwo(){
    navigate('OnBoardingTwo');
  }

  return (
    <>
    <StatusBar backgroundColor="#F2F3F5" barStyle="dark-content" />
    <View style={styles.OnBoardingOneContainer}>
      <Image source={Ilustra01} style={styles.ilustraOne} />
      <Text style={styles.mainText}>Leve felicidade para o mundo</Text>
      <Text style={styles.subText}>Visite orfanatos e mude o dia de muitas crianças.</Text>
      <RectButton style={styles.fiArrowRight} onPress={goToOnboardingTwo}>
        <Feather name="arrow-right" size={50} color="#15B6D6" />
      </RectButton>
    </View>
    </>
  );
};

export default OnBoardingOne;
