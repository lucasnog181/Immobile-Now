import { StatusBar } from 'react-native';
import React from 'react';
import Routes from './src/routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';


import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/providers/AuthContext';

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (

      <AuthProvider>
        <NavigationContainer>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="dark-content"
          />
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    )
  }
}
