import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import Explore from '../screens/Home/Explore';
import Cart from '../screens/Home/Cart';
import Favorites from '../screens/Home/Favorites';
import Account from '../screens/Home/Account';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Shop" component={HomeScreen} options={{}} />
      <Tab.Screen name="Explore" component={Explore} options={{}} />
      <Tab.Screen name="Cart" component={Cart} options={{}} />
      <Tab.Screen name="Favorites" component={Favorites} options={{}} />
      <Tab.Screen name="Account" component={Account} options={{ }} />

      
    </Tab.Navigator>
  );
};

export default TabNavigator;
