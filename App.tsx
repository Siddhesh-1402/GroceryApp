/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/navigation/AppNavigator';
import TabNavigator from './src/navigation/TabNavigator';
import ProductDetails from './src/screens/Details/ProductDetails';
import { CartProvider } from './src/context/CartContext';
import { FavContexts } from './src/context/FavContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <FavContexts>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Screens" component={AppNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavContexts>
      </CartProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
