import React, { useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SplashLogo from '../../../assets/splash.png';

const SplashScreen: React.FC = () => {

  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('OrphanagesMap');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.splashLogo} source={SplashLogo} />
      <Text style={styles.cityText}>Rio do Sul</Text>
      <Text style={styles.ufText}>Santa Catarina</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11C0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashLogo: {

  },

  cityText: {
    fontFamily: 'Nunito_700Bold',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#FFFFFF',
    
    marginTop: 200,
  },

  ufText: {
    fontFamily: 'Nunito_600SemiBold',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 30,
    color: '#FFFFFF',
  },


});

export default SplashScreen;
