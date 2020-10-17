import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import MapView, { Marker, Callout , PROVIDER_GOOGLE } from 'react-native-maps';

import MapMarker from '../../images/map-marker.png';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

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
