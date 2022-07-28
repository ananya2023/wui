import { StyleSheet, Text, TextInput,Platform, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { theme } from '../theme'
const ChatInput = () => {

  const [message,setMessage] = useState("")
    return (
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View  style={styles.inputandmicrophone}>
             <TouchableOpacity
             style={styles.emoticonButton}
             >
              <Icon name="emoticon-outline"  size={25} color={theme.colors.storyBorder} />

             </TouchableOpacity>
             <TextInput 
               multiline
               placeholder='Type something..'
               style={styles.input}
               onChangeText={text => setMessage(text)}
             />
             <TouchableOpacity style={styles.rightIconButton}>
             <Icon name="paperclip"  size={25} color={theme.colors.storyBorder} />
             </TouchableOpacity>

             <TouchableOpacity style={styles.rightIconButton}>
             <Icon name="camera"  size={25} color={theme.colors.storyBorder} />
             </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendButton}>
             <Icon name={message ? "send" : "microphone"}  size={25} color={theme.colors.white} />
             </TouchableOpacity>
        </View>
        
      </View>
  
    )
}
const styles =  StyleSheet.create({
  container:{
       justifyContent:"center",
       backgroundColor:theme.colors.white,
  },
  innercontainer:{
     paddingHorizontal:10,
     marginHorizontal:10,
     justifyContent:'space-between',
     alignItems:'center',
     flexDirection:'row',
     paddingVertical:10,
  },
  inputandmicrophone:{
    flexDirection:'row',
    backgroundColor:theme.colors.inputbg,
    flex:3,
    marginRight:10,
    paddingVertical:Platform.os === "ios" ? 10 : 0,
    borderRadius:30,
    alignItems:'center',
     justifyContent:"space-between",
  },
  input:{
    backgroundColor:'transparent',
    paddingLeft:20,
    color:theme.colors.inputtext,
    flex:3,
    fontSize:15,
  height:40,
    alignSelf:'center',

  },
  rightIconButton:{
    justifyContent:'center',
     alignItems:'center',
     paddingRight:15,
     paddingLeft:5,
     borderLeftWidth:1,
     borderLeftColor:'#fff',
  },
  emoticonButton:{
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10,
  },
  sendButton:{
    backgroundColor:theme.colors.primary,
    borderRadius:40,
    height:50,
    width:50,
    alignItems:'center',
    justifyContent:'center',
  }

})
export default ChatInput