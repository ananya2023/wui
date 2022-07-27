import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { theme } from '../theme'

const ChatItem = ({picture,username,bio,lastMessage,time,isBlocked,isMuted,notification,hasStory}) => {
  
  const showStoryCircle = () =>{
    if(hasStory) {
      return {
        borderColor:theme.colors.storyBorder,
        borderwidth:2,
      }
    }

  }
  const showNotification = (type) => {
             if(notification && type === 'number'){
              return(
                <View style={styles.notificationcircle}>
                 <Text style={styles.notification}>{notification}</Text>
                </View>
              )
             }
             else if (notification &&  type === 'imageCircle'){
                  return {
                    borderColor : theme.colors.primary
                  }
             }
  };
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.conversation}>
        <TouchableOpacity style={[styles.imageContainer,showStoryCircle()]}>
            <Image style={styles.image} source ={{uri:picture}} />
        </TouchableOpacity>
        <View
            style={{
              flex:1,
              justifyContent : 'center',
            }}  >

              <View  style={{
                flexDirection:'row',
                justifyContent:'space-between'
              }}>
                  <Text numberOfLines={1} style={styles.username}> {username}</Text>
                  <Text style={styles.time}>{time}</Text>
              </View>
              <View style={{
                flexDirection:'row',
                justifyContent:'space-between'
              }}>
                <Text style={styles.message}>{lastMessage}</Text>
                {showNotification('number')}
              </View>
        </View>
        </TouchableOpacity>
    </View>
  )
}
const styles =  StyleSheet.create({
  container : {
      
  },
  conversation:{
      flexDirection:"row",
      paddingBottom:25,
      paddingRight:20,
      paddingLeft:10,

  },
  imageContainer:{
            marginRight:15,
            borderRadius:25,
            height:50,
            width:50,
           marginTop:10,
            overflow:'hidden',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',

  },
  image:{
    height:55,
    width:55,

  },
  username:{
    fontSize : theme.fontSize.title,
    color :  theme.colors.title,
    width:210,
  },
  message:{
    fontSize:theme.fontSize.message,
    width:240,
    color:theme.colors.subTitle,
  },
  time:{
    fontSize:theme.fontSize.subTitle,
    color:theme.colors.subTitle,
    fontWeight:'300',
  },
  notificationcircle:{
     backgroundColor:theme.colors.primary,
     borderRadius:50,
     height:20,
     width:20,
     marginRight:5,
     alignItems:'center',
     justifyContent:'center',
  },
  notification:{
    color:theme.colors.white,
    fontWeight:'bold',
    fontSize:10,
  }
})

export default  ChatItem