import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from '../Gestao_Estoque/src/routes/AppRoutes';


export default function App() {
  return (
   <NavigationContainer>
    <StatusBar style= "dark"/>
    <AppRoutes />
   </NavigationContainer>
  );
}