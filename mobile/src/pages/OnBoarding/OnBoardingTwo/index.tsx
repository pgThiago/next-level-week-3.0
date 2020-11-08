import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Ilustra02 from '../../../images/ilustra02.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

const OnBoardingTwo: React.FC = () => {

  const { navigate } = useNavigation();

  function goToIntro01() {
    navigate('Intro01');
  }

  return (
    <View style={styles.OnBoardingTwoContainer}>
      <StatusBar backgroundColor="#F2F3F5" barStyle="dark-content" />

      <Image source={Ilustra02} style={styles.ilustraTwo} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Escolha um orfanato no mapa e faça uma visita</Text>
      </View>

      <RectButton style={styles.fiArrowRight} onPress={goToIntro01}>
        <Feather name="arrow-right" size={50} color="#15B6D6" />
      </RectButton>

    </View>
  );
};

export default OnBoardingTwo;

