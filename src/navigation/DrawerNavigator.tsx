// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/Home/HomeScreen';
// import Explore from '../screens/Home/Explore';
// import Cart from '../screens/Home/Cart';
// import Favorites from '../screens/Home/Favorites';
// import Account from '../screens/Home/Account';
// import { Drawer } from 'react-native-paper';
// import { DrawerActions, useNavigation } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// const DrawerNavigator = () => {
//   const navigation = useNavigation();
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

// export default DrawerNavigator;

// const TabIcon = ({ icon, label, focused }: any) => {
//   return (
//     <View style={styles.iconContainer}>
//       <Image
//         source={icon}
//         style={[styles.icon, { tintColor: focused ? '#6CC51D' : '#000' }]}
//       />
//       <Text style={[styles.label, { color: focused ? '#6CC51D' : '#000' }]}>
//         {label}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 70,

//     paddingTop: 10,
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//   },

//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 50,
//   },

//   icon: {
//     width: 24,
//     height: 24,
//     marginBottom: 4,
//     objectFit: 'contain',
//   },

//   label: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });

import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from '../screens/Home/HomeScreen';
import Explore from '../screens/Home/Explore';
import Cart from '../screens/Home/Cart';
import Favorites from '../screens/Home/Favorites';
import Account from '../screens/Home/Account';
import { Menu } from '../assets/svg/Index';

const Drawer = createDrawerNavigator();

/* ---------- Floating Menu Button ---------- */
const MenuButton = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={[styles.menuButton, { top: insets.top + 10 }]}
    >
      {/* <Icon name="menu" size={28} color="#000" /> */}
      <Menu height={30} width={30}/>
    </TouchableOpacity>
  );
};

/* ---------- Custom Drawer Content ---------- */
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, marginTop: 40 }}
    >
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

/* ---------- Drawer Navigator ---------- */
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#53B175',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: styles.drawerLabel,
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: ({ color, size }) => (
            // <Icon name="home-outline" color={color} size={size} />
            <Image source={require('../assets/images/Shop.png')}  tintColor={color}/>
          ),
        }}
      >
        {(props) => (
          <View style={styles.screen}>
            <MenuButton navigation={props.navigation} />
            <HomeScreen {...props} />
          </View>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Explore"
        options={{
          drawerIcon: ({ color, size }) => (
           <Image source={require('../assets/images/Explore.png')}  tintColor={color}/>
          ),
        }}
      >
        {(props) => (
          <View style={styles.screen}>
            <MenuButton navigation={props.navigation} />
            <Explore {...props} />
          </View>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Cart"
        options={{
          drawerIcon: ({ color, size }) => (
           <Image source={require('../assets/images/Cart.png')}  tintColor={color}/>
          ),
        }}
      >
        {(props) => (
          <View style={styles.screen}>
            <MenuButton navigation={props.navigation} />
            <Cart {...props} />
          </View>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Favorites"
        options={{
          drawerIcon: ({ color, size }) => (
           <Image source={require('../assets/images/favourite1.png')}  tintColor={color}/>
          ),
        }}
      >
        {(props) => (
          <View style={styles.screen}>
            <MenuButton navigation={props.navigation} />
            <Favorites {...props} />
          </View>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Account"
        options={{
          drawerIcon: ({ color, size }) => (
           <Image source={require('../assets/images/user1.png')}  tintColor={color}/>
          ),
        }}
      >
        {(props) => (
          <View style={styles.screen}>
            <MenuButton navigation={props.navigation} />
            <Account {...props} />
          </View>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    zIndex: 1000,
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});
