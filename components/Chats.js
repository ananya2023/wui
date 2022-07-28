import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { ScrollView } from 'react-native'
import ChatItem from "./ChatItem"
const Chats = ({children}) => {
  return (
    <ScrollView>
      {children}
      <ChatItem
        picture="https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=600"
        username="Family👪💕"
        bio="#include<love.h>"
        lastMessage = "haha"
        time="5:00 PM"
        notification="7"
      

         />
          <ChatItem
        picture="https://images.pexels.com/photos/590472/pexels-photo-590472.jpeg?auto=compress&cs=tinysrgb&w=600"
        username="Bunny Babu"
        bio="Attitute bolthey"
        lastMessage = " Good Morning Akka"
        time="6:00 AM"
        notification="1"
        hasStory

         />
          <ChatItem
        picture="data:image/jpeg;base64,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"
        username="Ananya Miriyala"
        bio="hello peeps"
        lastMessage = " hello there"
        time="5:00 PM"
        notification="3"
        hasStory

         />
          <ChatItem
        picture="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=600"
        username="mochi"
        bio="hello peeps"
        lastMessage = "funny🤣"
        time="1:37 PM"
        notification="2"
        hasStory

         />
          <ChatItem
        picture="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600"
        username="Amma"
        bio="hello peeps"
        lastMessage = "Ok Thalli"
        time="2:57 PM"
        notification=""
        hasStory

         />
          
          <ChatItem
        picture="https://images.pexels.com/photos/3830752/pexels-photo-3830752.jpeg?auto=compress&cs=tinysrgb&w=600"
        username="wineandfive"
        bio="frens forever"
        lastMessage = " I am in"
        time="3:00 AM"
        notification="17"
        hasStory

        
         />
          <ChatItem
        picture="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"
        username="Sid"
        bio="hello peeps"
        lastMessage = " Good Work Ananya"
        time="4:26 PM"
        notification=""
        hasStory

         />
         <ChatItem
        picture="https://images.pexels.com/photos/1497856/pexels-photo-1497856.jpeg?auto=compress&cs=tinysrgb&w=600"
        username="Madhuri"
        bio="hello peeps"
        lastMessage = " Done👍"
        time="11:48 PM"
        notification=""
        hasStory

         />
         <ChatItem
        picture="data:image/jpeg;base64,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"
        username="Flipkart✅"
        bio="hello peeps"
        lastMessage = "Your order is delivered Ananya"
        time="7:08 PM"
        notification="1"
        hasStory

         />
           <ChatItem
        picture="data:image/jpeg;base64,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"
        username="+91 8008703260"
        bio="hello peeps"
        lastMessage = "Thankyou Mam"
        time="7:08 PM"
        notification="1"
        hasStory

         />
    </ScrollView>
  )
}
export default Chats