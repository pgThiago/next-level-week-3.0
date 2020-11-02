import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import Routes from './src/routes';

function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });  

  if(!fontsLoaded){
    return null;
  }    
  
  else{
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </>
    );
  }
}

export default App;