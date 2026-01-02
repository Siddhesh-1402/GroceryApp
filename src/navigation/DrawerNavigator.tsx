// import { View, Text, Image, StyleSheet } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/Home/HomeScreen';
// import Explore from '../screens/Home/Explore';
// import Cart from '../screens/Home/Cart';
// import Favorites from '../screens/Home/Favorites';
// import Account from '../screens/Home/Account';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Tab = createBottomTabNavigator();

// const Drawer= createDrawerNavigator

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//       }}
//     >
//       <Tab.Screen
//         name="Shop"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               label="Shop"
//               icon={require('../assets/images/Shop.png')}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Explore"
//         component={Explore}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               label="Explore"
//               icon={require('../assets/images/Explore.png')}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Cart"
//         component={Cart}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               label="Cart"
//               icon={require('../assets/images/Cart.png')}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Favorites"
//         component={Favorites}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               label="Favorite"
//               icon={require('../assets/images/favourite1.png')}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Account"
//         component={Account}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               label="Account"
//               icon={require('../assets/images/user1.png')}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

// const TabIcon = ({ icon, label, focused }: any) => {
//   return (
//     <View style={styles.iconContainer}>
//       <Image
//         source={icon}
//         style={[
//           styles.icon,
//           { tintColor: focused ? '#6CC51D' : '#000' },
//         ]}
//       />
//       <Text
//         style={[
//           styles.label,
//           { color: focused ? '#6CC51D' : '#000' },
//         ]}
//       >
//         {label}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 70,
  
//     paddingTop: 10,
//     borderTopRightRadius:10,
//     borderTopLeftRadius:10
//   },

//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width:50,
   
//   },

//   icon: {
//     width: 24,
//     height: 24,
//     marginBottom: 4,
//     objectFit:"contain"
//   },

//   label: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });


import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home/HomeScreen';
import Explore from '../screens/Home/Explore';
import Cart from '../screens/Home/Cart';
import Favorites from '../screens/Home/Favorites';
import Account from '../screens/Home/Account';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawer,
        drawerActiveTintColor: '#6CC51D',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: styles.drawerLabel,
      }}
    >
      <Drawer.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={require('../assets/images/Shop.png')}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Explore"
        component={Explore}
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={require('../assets/images/Explore.png')}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={require('../assets/images/Cart.png')}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={require('../assets/images/favourite1.png')}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={require('../assets/images/user1.png')}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


const styles = StyleSheet.create({
  drawer: {
    width: 260,
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  drawerLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
});
