import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import OrphanageData02 from './pages/CreateOrphanage/OrphanageData02';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import Header from './components/Header';

import Splash from './pages/SplashScreen';

import OnBoardingOne from './pages/OnBoarding/OnBoardingOne';
import OnBoardingTwo from './pages/OnBoarding/OnBoardingTwo';

import Intro01 from './pages/AnimatedIntro/Intro01';
import Intro02 from './pages/AnimatedIntro/Intro02';

import SuccessfullySubmittedPage from './pages/SuccessfullySubmittedPage';
import CancelOrphanageCreationPage from './pages/CancelOrphanageCreationPage';

const routes: React.FC = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator
      screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
       
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="OnBoardingOne" component={OnBoardingOne} />
        <Stack.Screen name="OnBoardingTwo" component={OnBoardingTwo} />
        <Stack.Screen name="OrphanagesMap" component={OrphanagesMap} />
        
        <Stack.Screen name="Intro01" component={Intro01} />
        <Stack.Screen name="Intro02" component={Intro02} />
        
        <Stack.Screen name="SuccessfullySubmittedPage" component={SuccessfullySubmittedPage} />
        <Stack.Screen name="CancelOrphanageCreationPage" component={CancelOrphanageCreationPage} />

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
          header: () => <Header title="Informe os dados" />
        }}

        />

        <Stack.Screen 
        name="OrphanageData02" 
        component={OrphanageData02} 
        options={{
          headerShown: true,
          header: () => <Header title="Informe os dados" />
        }}

        />
        
        <Stack.Screen 
        name="SelectMapPosition" 
        component={SelectMapPosition} 
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no mapa" />
        }}

        />

      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default routes;

{/* <Stack.Screen name="Intro01" component={Intro01} />
<Stack.Screen name="Intro02" component={Intro02} /> */}