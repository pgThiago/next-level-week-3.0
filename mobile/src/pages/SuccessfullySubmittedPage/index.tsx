import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import GreenGirlIcon from '../../images/green-girl-icon.png';

import styles from './styles';

const SuccessfullySubmittedPage: React.FC = () => {

  const { navigate } = useNavigation();

  function handleNavigate(){
    navigate('CancelOrphanageCreationPage');
  }

  return (
   <View style={styles.container}>
      <StatusBar backgroundColor="#39CC83" />
      <View style={styles.content}>

        <Image source={GreenGirlIcon} style={styles.GreenGirlIcon} />

        <Text style={styles.titleText}>Ebaaa!</Text>
        <Text style={styles.contentText}>
          O cadastro deu certo e foi { "\n" } enviado ao administrador para ser { "\n" }
          aprovado. Agora é só esperar :)
        </Text>

        <RectButton style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>Ok</Text>
        </RectButton>

      </View>

   </View>
  );
};

export default SuccessfullySubmittedPage;
