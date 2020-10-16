import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrphanageDetails: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Detalhes do orfanato </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
    }
})

export default OrphanageDetails;
