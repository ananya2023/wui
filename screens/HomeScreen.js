import React, { useLayoutEffect } from "react";
import {StyleSheet,Text,View} from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons"
import CameraScreen from "../subscreens/CameraScreen"
import ChatScreen from "../subscreens/ChatScreen"
import CallScreen from "../subscreens/CallsScreen"
import StatusScreen from "../subscreens/StatusScreen"

const Tab = createMaterialTopTabNavigator()

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
               title : "WhatsApp",
               headerTitleStyle : {
                color : "#86959E",
               },
               headerStyle : {
                backgroundColor : "#1f2c34"
               },
               headerRight : () => (
                <View style={StyleSheet.headerRight}>
                   <MaterialIcons name="search" size={30} color="#86959E" />
            
                   <MaterialCommunityIcons name="dots-vertical" size={30} color="#86959E" />
                  
                </View>
               )
        })
    })

  return (
  <Tab.Navigator initialRouteName="chats"
      screenOptions={{
        tabBarActiveTintColor : "#03A17F",
        tabBarStyle : {
            backgroundColor : "#1f2c34"
        },
        tabBarInactiveTintColor : "#86959E",
        tabBarIndicatorStyle : {
            backgroundColor : "#03A17F"
        }
      }}
  >
      <Tab.Screen  name="camera" component={CameraScreen} 
        options={{
            tabBarIcon:(() => 
            <View>
                <MaterialIcons name="photo-camera" size ={24} color="#86959E" />
            </View>
            ),
            tabBarShowLabel:false
        }}
      />
      <Tab.Screen  name="chats" component={ChatScreen}  />
      <Tab.Screen  name="status" component={StatusScreen}  />
      <Tab.Screen  name="calls" component={CallScreen} headerShown={false}  />
    </Tab.Navigator>

  )
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#131c21",
    color:"#86059E"
  },
  headerRight:{
    flexDirection:"row"
  }

})
export default HomeScreen
