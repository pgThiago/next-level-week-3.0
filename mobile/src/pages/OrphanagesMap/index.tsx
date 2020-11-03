import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import MapView, { Marker, Callout , PROVIDER_GOOGLE } from 'react-native-maps';

import MapMarker from '../../images/map-marker.png';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import * as Location from 'expo-location';

import api from '../../services/api';

interface Orphanage{
  id: number;
  name: string;
  latitude: number;
  longitude: number;  
}

const OrphanagesMap: React.FC = () => {

  const { navigate } = useNavigation();
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const [ initialLocation, setInitialLocation ] = useState({
    initialLatitude: 0,
    initialLongitude: 0,
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
    
    async function getOrphanages(){
      const response = await api.get('orphanages');
      setOrphanages(response.data);
    }

    getOrphanages();

  });

  function handleNavigateToOrphanageDetails(id: number){
    navigate('OrphanageDetails', { id });
  }

  function handleNavigateToCreate(){
    navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(255, 255, 255, 0.1)" />
      {
        initialLocation.initialLatitude !== 0 && (
          <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map} 
          initialRegion={{ 
        latitude: 38.897994,
        longitude: -77.036519,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008
      }}      
      >
        { orphanages.map(orphanage => (
          <Marker  key={orphanage.id}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}  
          icon={MapMarker} 
          coordinate={{
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
          }} >
  
          <Callout tooltip={true} onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}> 
            <View style={styles.calloutContainer}> 
              <Text style={styles.calloutText}> {orphanage.name} </Text> 
            </View>
          </Callout>
  
          </Marker>
        )) }

      </MapView>
        )
      }

      <View style={styles.footer}>

        <Text style={styles.footerText}>{orphanages.length} Orfanatos encontrados</Text>
        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreate}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>

      </View>
    </View>
  );
};

export default OrphanagesMap;
