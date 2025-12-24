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
import Onboarding from './src/screens/Onboarding';
import SignIn from './src/screens/auth/numLog/SignIn';
import Number from './src/screens/auth/numLog/Number';
import Verification from './src/screens/auth/numLog/Verification';
import Location from './src/screens/auth/numLog/Location';
import LogIn from './src/screens/auth/LogIn';
import SignUp from './src/screens/auth/SignUp';
import AppNavigator from './src/navigation/AppNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Number" component={Number} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} /> */}
          <Stack.Screen name='Screens' component={AppNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
