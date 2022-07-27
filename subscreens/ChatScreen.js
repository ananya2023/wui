import React from 'react'
import {StyleSheet,Text,View,ScrollView, TouchableOpacity} from "react-native"
import Chats from "../components/Chats"
import Icon from '@expo/vector-icons/MaterialIcons'
import {theme} from "../theme"
import { fabStyles } from '../styles'
const ChatScreen = () => {
  return (
    <View style={{backgroundColor:theme.colors.white,flex:1}}>
        <Chats>

        </Chats>
        <TouchableOpacity
        onPress={() => {} }  style={fabStyles.style} > 
        <Icon name="chat" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
    </View>
  )
}
export default  ChatScreen
