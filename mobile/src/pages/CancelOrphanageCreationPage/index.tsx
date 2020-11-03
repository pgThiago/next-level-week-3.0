import React, { useState } from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import CloseButton from '../../images/cancel-button.png';
import { RectButton } from 'react-native-gesture-handler';

const CancelOrphanageCreationPage: React.FC = () => {

  const { navigate } = useNavigation();

  const [ yesIsPressed, setYesIsPressed ] = useState(false);
  const [ noIsPressed, setNoIsPressed ] = useState(false);

  function handleNavigate(){
    navigate('SuccessfullySubmittedPage');
  }

  function toggleYesButtonColor(){
    setYesIsPressed(!yesIsPressed);
  }

  function toggleNoButtonColor(){
    setNoIsPressed(!noIsPressed);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF669D" />
      <View style={styles.content}>

        <RectButton style={styles.closeButtonBackground} onPress={handleNavigate}>
          <Image source={CloseButton} style={styles.closeButton} />
        </RectButton>

        <Text style={styles.titleText}>Cancelar cadastro</Text>
        <Text style={styles.contentText}>
          Tem certeza que quer { "\n" } cancelar esse cadastro?
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.noButton, noIsPressed ? styles.selectedButton : styles.noButton]} onPress={() => {
            toggleNoButtonColor()
            handleNavigate()
          }}>
            <Text style={styles.buttonText}>Não</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.yesButton, yesIsPressed ? styles.selectedButton : styles.yesButton]} onPress={() => {
            toggleYesButtonColor()
            handleNavigate()
          }}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
        </View>

      </View>

   </View>
  );
};

export default CancelOrphanageCreationPage;
