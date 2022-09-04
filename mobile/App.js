import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import SignUpScreeen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function UnautharizedScreens () {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Sign Up" component={SignUpScreeen}/>
    </Stack.Navigator>
  )
}

function AutharizedScreens() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Main Page" component={MainScreen}/>
    </Bottom.Navigator>
  )
}

function SwitchScreen(autharized = false) {
  if (0) {
    return <AutharizedScreens/>
  }

  return <UnautharizedScreens/>
}

export default function App() {
  return (
    <NavigationContainer>
      <SwitchScreen/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
