import React, { useState, useRef } from "react";
import { ScrollView ,Text} from "react-native";

import Message from "./Message";

import { theme } from "../theme";

const MessagesList = () => {
	const [messages, setMessages] = useState([
		{
			user: 0,
			time: "12:00",
			content: "Hey",
		},
		{
			user: 1,
			time: "12:05",
			content: "What's up",
		},
		{
			user: 1,
			time: "12:07",
			content: "How is it going?",
		},
		{
			user: 0,
			time: "12:09",
			content: "things are going great",
		},
		{
			user: 0,
			time: "12:00",
			content: "Good :)",
		},
		{
			user: 1,
			time: "12:05",
			content: "Should we hang out tomorrow? I was thinking of going somewhere which has some good books to read",
		},
		{
			user: 0,
			time: "12:07",
			content: "Sure",
		},
		{
			user: 1,
			time: "12:09",
			content: "Great",
		},
		{
			user: 0,
			time: "12:10",
			content: "6 o'clock?",
		},
		{
			user: 1,
			time: "12:11",
			content: "Sounds good",
		},
    {
			user: 0,
			time: "12:11",
			content: "umm, Wear the hoodie that i gifted you!",
		},
		{
			user: 1,
			time: "12:12",
			content: "HAHAHA sure,It fits me well actually",
		},
    {
			user: 0,
			time: "5:55",
			content: "Are you Ready?",
		},
		{
			user: 1,
			time: "7:00",
			content: "mmmmmmm not really",
		},
    {
			user: 0,
			time: "7:02",
			content: "What happened",
		},
    {
			user: 0,
			time: "7:30",
			content: "Is everthing okay",
		},
    {
			user: 0,
			time: "9:00",
			content: "Hello there",
		},

	]);

	const user = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages.map((message, index) => (
				<Message
					key={index}
					time={message.time}
					isLeft={message.user !== user.current}
					message={message.content}
				
				/>
			))}
     
		</ScrollView>
	);
};

export default MessagesList;



















































































// import { Text, View ,ScrollView} from 'react-native'
// import React, { useState,useRef} from 'react'
// import Message from "./Message";
// import { theme } from '../theme';

// const MessagesList = () => {
//   const [messages,setMessages] = useState([

//     {
//         user:0,
//         time:"12:00",
//         content:'hi'
//     },
//     {
//       user:1,
//       time:"12:05",
//       content:'hey'
//   },
//   {
//     user:1,
//     time:"12:06",
//     content:'whatspp'
// },
// {
//   user:0,
//   time:"12:06",
//   content:'Nothing much'
// },
//   ]);


//   const user = useRef(0);
//   const scrollView = useRef();
//     return (
      
//     <ScrollView style={{backgroundColor:theme.colors.white}}
//       ref={ref => scrollView.current = ref}
//       onContentChange={() => {
//         scrollView.current.scrollToEnd({
//           animated:true
//         })
//       }}
//     >
//             {messages.map((message,index) => {
//                 <Message 
//                 key={index} 
//                 time={message.time}
//                 isLeft={message.user !== user.current}
//                 message={message.content}
//                 />
//             })}
//     </ScrollView>
    
//     )
// }
// export default MessagesList