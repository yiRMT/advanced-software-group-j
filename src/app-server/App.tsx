import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;