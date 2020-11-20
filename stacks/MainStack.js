import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import MainTabs from './MainTabs';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      //cabeçalho
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Cadastro" component={Cadastro} />
    <Stack.Screen name="MainTabs" component={MainTabs} />
  </Stack.Navigator>
);
