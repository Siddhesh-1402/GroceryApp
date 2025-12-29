import { View, Text, Image, StyleSheet } from 'react-native';
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Shop"
              icon={require('../assets/images/Shop.png')}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Explore"
              icon={require('../assets/images/Explore.png')}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Cart"
              icon={require('../assets/images/Cart.png')}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Favorite"
              icon={require('../assets/images/favourite1.png')}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Account"
              icon={require('../assets/images/user1.png')}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const TabIcon = ({ icon, label, focused }: any) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        style={[
          styles.icon,
          { tintColor: focused ? '#6CC51D' : '#000' },
        ]}
      />
      <Text
        style={[
          styles.label,
          { color: focused ? '#6CC51D' : '#000' },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
  
    paddingTop: 10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
   
  },

  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    objectFit:"contain"
  },

  label: {
    fontSize: 12,
    fontWeight: '500',
  },
});
