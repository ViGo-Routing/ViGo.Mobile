import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT SCREENS
import HomeScreen from '../screens/Home/HomeScreen'
import WelcomeScreen from '../screens/Welcome/WelcomeScreen'
import LoginScreen from '../screens/Login/LoginScreen'
import RegistrationScreen from '../screens/Registration/RegistrationScreen'
import MenuSettingScreen from '../screens/MenuSetting/MenuSettingScreen';
import MessageScreen from '../screens/Message/MessageScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';
import HistoryScreen from '../screens/History/HistoryScreen';
import MyRouteScreen from '../screens/MyRoute/MyRouteScreen';
import ProfileSreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import LoginSuccessScreen from '../screens/Welcome/WelcomeLoginScreen';
import ConfirmCodeScreen from '../screens/Login/ConfirmCode';
import BikeBookingScreen from '../screens/Booking/BikeBookingScreen';
import CarBookingScreen from '../screens/Booking/CarBookingScreen';



const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="ConfirmCode" options={{ headerShown: false }} component={ConfirmCodeScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="LoginSuccess" options={{ headerShown: false }} component={LoginSuccessScreen} />
        <Stack.Screen name="Registration" options={{ headerShown: false }} component={RegistrationScreen} />
        <Stack.Screen name="MenuSetting" options={{ headerShown: false }} component={MenuSettingScreen} />
        <Stack.Screen name="Message" options={{ headerShown: false }} component={MessageScreen} />
        <Stack.Screen name="Promotion" options={{ headerShown: false }} component={PromotionScreen} />
        <Stack.Screen name="History" options={{ headerShown: false }} component={HistoryScreen} />
        <Stack.Screen name="MyRoute" options={{ headerShown: false }} component={MyRouteScreen} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileSreen} />
        <Stack.Screen name="EditProfile" options={{ headerShown: false }} component={EditProfileScreen} />
        <Stack.Screen name="BikeBooking" options={{ headerShown: false }} component={BikeBookingScreen} />
        <Stack.Screen name="CarBooking" options={{ headerShown: false }} component={CarBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
