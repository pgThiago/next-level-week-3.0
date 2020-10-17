import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

interface HeaderProps{
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ( { title, showCancel = true } ) => {

  const { goBack, navigate } = useNavigation();

  function handleGoBack(){
    goBack();
  }

  function handleToHome(){
    navigate('OrphanagesMaps');
  }

  return (
    <View style={styles.container}>
      
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      
      <Text style={styles.title}>{title}</Text>

      {
        showCancel && (
          <BorderlessButton onPress={handleToHome}>
            <Feather name="x" size={24} color="#ff669d" />
          </BorderlessButton>
        )
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44
  },

  title :{
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  }

});

export default Header;