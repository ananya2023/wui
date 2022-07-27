import React from 'react'
import {ScrollView, StyleSheet,Text,TouchableOpacity,View} from "react-native"
import Icon from '@expo/vector-icons/FontAwesome5'
import Calls from '../components/Calls'
import {theme} from "../theme"
import { fabStyles} from "../styles"
const CallScreen = ()  =>{
  return (
    <View>
    <ScrollView>
      <Calls />
    </ScrollView>
    <TouchableOpacity style={fabStyles.style}>
       <Icon name="phone" size={25} color={theme.colors.primary}  /> 
    </TouchableOpacity>
    </View>
  )
}

export default CallScreen