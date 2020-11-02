import React from 'react';
import { View, Text, Image, StatusBar} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Ilustra02 from '../../../images/ilustra02.png';

import styles from './styles';
import { Feather } from '@expo/vector-icons';

const OnBoardingTwo: React.FC = () => {
  return (
    <>
    <StatusBar backgroundColor="#F2F3F5" barStyle="dark-content" />
    <View style={styles.OnBoardingTwoContainer}>
      <Image source={Ilustra02} style={styles.ilustraTwo} />
      <Text style={styles.mainText}>Leve felicidade para o mundo</Text>
      <Text style={styles.subText}>Visite orfanatos e mude o dia de muitas crianças.</Text>
      <RectButton style={styles.fiArrowRight}>
        <Feather name="arrow-right" size={50} color="#15B6D6" />
      </RectButton>
    </View>
    </>
  );
};

export default OnBoardingTwo;

