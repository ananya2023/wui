import React from 'react'
import { Image, StyleSheet, View ,Text, TouchableOpacity
} from 'react-native'
import FAIcon from "@expo/vector-icons/FontAwesome5"
import McIcon from "@expo/vector-icons/MaterialCommunityIcons"
import { theme } from '../theme'
const CallItem = ({username,picture,time}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imagecontainer}>
            <Image style={styles.image} source={{uri:picture}} />
        </View >
        <View style={styles.usernameandcall}>
            <View style={styles.usernameandstatus}>
                <Text>{username}</Text>
                <View style={styles.callstatuscontainer}>
                  
                  <Text>{time}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
             <TouchableOpacity>
                <McIcon name="video" size={25} color={theme.colors.primary} />

             </TouchableOpacity>
             <TouchableOpacity>
                <McIcon name="phone" size={25} color={theme.colors.primary} />
             </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({
    container:{
       paddingTop:20,
       paddingRight:20,
       paddingLeft:10,
       flexDirection:'row', 

    },
    imagecontainer:{
        borderRadius:25,
        height:50,
        width:50,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
    },
    image:{
        height:50,
        width:50,
        borderRadius:25,
    },
    usernameandcall:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        alignItems:'center'
    },
    usernameandstatus:{
        paddingHorizontal:10,

    },
    username:{
        color:theme.colors.title,
        fontSize:16

    },
    callstatuscontainer:{
        flexDirection:'row',
        alignItems:'center'

    },
    time:{
        color:theme.colors.storyBorder,
        paddingHorizontal:5,
    }
    
})
export default CallItem
