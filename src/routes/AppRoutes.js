import React from'react';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

import LoginScreen from '../screens/Login.js';
import HomeScreen from '../screens/Home.js';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}