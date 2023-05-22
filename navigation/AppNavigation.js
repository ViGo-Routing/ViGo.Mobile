import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen'
import WelcomeScreen from '../screens/Welcome/WelcomeScreen'
import LoginScreen from '../screens/Login/LoginScreen'
import RegistrationScreen from '../screens/Registration/RegistrationScreen'

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Registration" options={{headerShown: false}} component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
