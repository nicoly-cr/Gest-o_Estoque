import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import handleNovoProduto from '../screens/handleNovoProduto';
//import handleLista from '../screens/handleLista';
//import handleEstoqueBaixo from '../screens/handleEstoqueBaixo';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NovoProduto" component={handleNovoProduto} />
           
        </Stack.Navigator>
    );
}