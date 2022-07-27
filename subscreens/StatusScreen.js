import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,ScrollView} from "react-native"
import Status from "../components/Status"
import Icon from '@expo/vector-icons/FontAwesome'
import {theme} from '../theme'
import  {fabStyles} from '../styles'

const StatuScreen = () =>{
  return (
   <View>
   <ScrollView>
    <Status />
   </ScrollView>
   <TouchableOpacity style={fabStyles.style}>
        <Icon name="camera" size={25} color={theme.colors.primary} />
   </TouchableOpacity>
   </View>
)}
export default StatuScreen