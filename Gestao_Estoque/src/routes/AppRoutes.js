import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';

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
            <Stack.Screen name="Lista" component={handleLista} />
            <Stack.Screen name="EstoqueBaixo" component={handleEstoqueBaixo} />
        </Stack.Navigator>
    );
}