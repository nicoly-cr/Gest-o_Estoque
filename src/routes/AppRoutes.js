import React from'react';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

import LoginScreen from '../screens/Login.js';
import HomeScreen from '../screens/Homescreen';

const stack= createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown:false,
        }}
        >
            <stack.Screen name="login" component={Login}/>
            <stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}