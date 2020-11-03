import React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import cursorSelectHand from '../../../images/cursor-select-hand.3.png';

import MapView, { Marker, Callout , PROVIDER_GOOGLE } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

const Intro02: React.FC = () => {

  const { navigate } = useNavigation();  

  function goToOrphanagesMap(){
    navigate('OrphanagesMap');
  }

  return (
    <>
      <StatusBar backgroundColor="rgba(21, 203, 205, 0.5)" barStyle="dark-content" />
      <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.mapIntro02} 
          initialRegion={{ 
          latitude: -1.3596575,
          longitude: -48.4593893,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}      
        >      

      </MapView>
      
      <RectButton style={styles.container} onPress={goToOrphanagesMap}>
        
        <Image source={cursorSelectHand} style={styles.cursorSelectHand} />
          <Text style={styles.textContent}>
            Toque no mapa { "\n" } para adicionar um { "\n" } orfanato
        </Text>
          
      </RectButton>
    </>
  );
};

export default Intro02;