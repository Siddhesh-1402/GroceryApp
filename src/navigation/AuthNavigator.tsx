
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/auth/numLog/SignIn';
import Verification from '../screens/auth/numLog/Verification';
import Location from '../screens/auth/numLog/Location';
import LogIn from '../screens/auth/LogIn';
import SignUp from '../screens/auth/SignUp';
import Number from '../screens/auth/numLog/Number';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
