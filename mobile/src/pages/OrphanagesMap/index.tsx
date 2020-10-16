import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout , PROVIDER_GOOGLE } from 'react-native-maps';

import MapMarker from '../../images/map-marker.png';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const OrphanagesMap: React.FC = () => {

  const { navigate } = useNavigation();

  function handleNavigateToOrphanageDetails(){
    navigate('OrphanageDetails');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView 
      provider={PROVIDER_GOOGLE}
      style={styles.map} 
      initialRegion={{ 
        latitude: -27.2092052,
        longitude: -49.6401092,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008
      }}      
      >
        <Marker  
        calloutAnchor={{
          x: 2.7,
          y: 0.8
        }}
        icon={MapMarker} 
        coordinate={{
          latitude: -27.2092052,
          longitude: -49.6401092,
        }} >

        <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}> 
          <View style={styles.calloutContainer}> 
            <Text style={styles.calloutText}> Lar das meninas </Text> 
          </View>
        </Callout>

        </Marker>

      </MapView>

      <View style={styles.footer}>

        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default OrphanagesMap;
