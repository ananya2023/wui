import React from 'react'
import { View ,Text, StyleSheet} from 'react-native'
import { theme } from '../theme'

const Message = ({time,isLeft,message}) => {

    const isOnLeft = type => {
        if(!isLeft && type === 'messagecontainer'){
            return{
                alignSelf:'flex-start',
                backgroundColor:'#f0f0f0',
                borderTopLeftRadius:0
            }
        }
        else if (isLeft && type=== 'message'){
            return{
                color:'#000'
            }
        }
        else if(isLeft && type=== "time"){
            return{
                color:theme.colors.des,
            }
        }
        else{
            return{
                borderTopRightRadius:0
            }
        }
    }

  return (
   <View style={styles.container}>
    <View style={[styles.messagecontainer,isOnLeft('messagecontainer')]}>
        <View style={styles.messageview}>
            <Text style={[styles.message,isOnLeft('message')]}>{message}</Text>
        </View>
        <View style={styles.timeView}>
            <Text style={[styles.time,isOnLeft('time')]} >{time}</Text>
        </View>
        </View> 
    
   </View>
  )
}
const styles = StyleSheet.create({
     container:{
       paddingVertical:10,
       marginVertical:10,
    },
    messagecontainer:{
        backgroundColor:theme.colors.msgbg,
        maxWidth:'80%',
        alignSelf:'flex-end',
        flexDirection:'row',
        borderRadius:10,
        paddingHorizontal:10,
        marginHorizontal:10,
        // paddingTop:1,
        // paddingBottom:1,

    },
    messageview:{
        backgroundColor:'transparent',
        maxWidth:'80%',
    },
    timeView:{
        backgroundColor:'transparent',
        justifyContent:'flex-end',
        paddingLeft:10,
    },
    message:{
        color:theme.colors.black, 
        alignSelf:'flex-start',
        fontSize:15,
    },
    time:{
        color:theme.colors.des,
        alignSelf:'flex-end',
        fontSize:10,
    }

})
export default Message
