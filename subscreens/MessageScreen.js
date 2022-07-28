

import React from 'react'
import { View } from 'react-native'
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';
import MessagesList from '../components/MessagesList'
const MessageScreen = ({route}) => {
    const {username,bio,picture,onlineStatus} = route?.params || {}; 

  return (
    <View style={{ flex: 1 }}>
         <ChatHeader  
         onPress={() => {}}
         username={username}
         bio={bio}
         picture={picture}
         onlineStatus={'Online'}
        
         />
  
       <MessagesList />

         <ChatInput  />

         
    </View>
  )
}
export default MessageScreen
