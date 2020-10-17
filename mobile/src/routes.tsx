import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import { Header } from 'react-native/Libraries/NewAppScreen';

const routes: React.FC = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
       
        <Stack.Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Stack.Screen 
        options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Orfanato" />
        }} 
        name="OrphanageDetails" component={OrphanageDetails} 
        
        />
        
        <Stack.Screen 
        name="OrphanageData" 
        component={OrphanageData} 
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no mapa" />
        }}

        />
        
        <Stack.Screen 
        name="SelectMapPosition" 
        component={SelectMapPosition} 
        options={{
          headerShown: true,
          header: () => <Header title="Informe os dados" />
        }}

        />

      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default routes;
