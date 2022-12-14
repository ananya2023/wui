import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from "./subscreens/MessageScreen";

const Stack = createStackNavigator()

export default function App() {
  return (
    
   <NavigationContainer>

    <Stack.Navigator 
    
    >
      <Stack.Screen  name="home"  component={HomeScreen}/>
      <Stack.Screen options={{headerShown: false}} name="message" component={MessageScreen} 
      />
    </Stack.Navigator>
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
