import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../screens/Onboarding';
import AuthNavigator from './AuthNavigator';
import ProductDetails from '../screens/Details/ProductDetails';
import { RootStackParamList } from './type';


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen  name="Splash" component={SplashScreen} />
         <Stack.Screen name="Onboarding" component={Onboarding} />
         <Stack.Screen name="Auth" component={AuthNavigator} />
         <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
