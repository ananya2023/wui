import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity, Image, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../theme'
const StatusItem = ({username,picture,time}) => {

  const navigation = useNavigation()

  return (
  <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>

        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={{uri:picture}} />
        </View>


         <View style={styles.textscontainer}>

          <Text numberOfLines={1} style={styles.username}>{username}</Text>
          <Text numberOfLines={1} style={styles.time}>{time}</Text>

         </View>

      </TouchableOpacity>

  </View>
  )
}


const styles =  StyleSheet.create({
  container:{

  },
  button:{
    flexDirection:'row',
    paddingBottom:20,
    paddingRight:20,
    paddingLeft:10,
  },
  imagecontainer:{
    marginRight:15,
    height:45,
    width:45,
    borderRadius:50,
    overflow:'hidden',
    borderColor:theme.colors.storyBorder,
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
  image:{
    height:50,
    width:50,
  },
  textscontainer:{
      justifyContent:'center'
  },
  username:{
    color:theme.colors.title,
    fontSize:theme.fontSize.title,

  },
  time:{
    color:theme.colors.subTitle,
    fontSize:theme.fontSize.message
  }

})

export default StatusItem