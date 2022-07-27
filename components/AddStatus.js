import React from 'react'
import { View,Text , StyleSheet,Image,TouchableOpacity} from 'react-native'
import Icon from "@expo/vector-icons/FontAwesome"
import { theme } from '../theme'

const AddStatus= ()  =>{
  return (
    <View style={styles.maincontainer}>
         <TouchableOpacity style={styles.innercontainer}>

        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={{uri:
          "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=600"
        }} />

        <View style={styles.iconcontainer}>
          <Icon name="plus" size={15} color="white" style={styles.iconStyle}   />
        </View>
        </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text1}>My Status</Text>
            <Text style={styles.text}>Tap to add status update</Text>
          </View>
         
      </TouchableOpacity>
      <View>
            <Text style={styles.text3}>Viewed Updates</Text>
          </View>
      </View>
  )
} 

const styles =  StyleSheet.create({
  maincontainer:{
paddingBottom:10,
  },
  innercontainer:{
    paddingRight:20,
    paddingLeft:10,
    flexDirection:'row',
    alignItems:'center',

  },
  imagecontainer:{
    marginRight:15,
    overflow:'hidden',
    paddingVertical:10,
  },
  image:{
    width:50,
    height:50,
    borderRadius:25,
  },
  iconcontainer:{
    position:'absolute',
    backgroundColor:theme.colors.primary,
    borderRadius:12.5,
    height:20,
    width:20,
    alignItems:'center',
    alignSelf:'center',
    top:40,
    left:25,
  },
  textcontainer:{
    justifyContent:'center',  
    
  },
  iconStyle:{
       justifyContent:'center',
       alignItems:'center',
  },
  text:{
    color:theme.colors.primary,
    fontSize:theme.fontSize.title,
    fontWeight:'normal'
  },
  text1:{
    color:theme.colors.black,
    fontSize:theme.fontSize.title,
    fontWeight:'bold',
    
  },
  text3:{
    color:"#808080",
    
    fontSize:theme.fontSize.subTitle,
    marginLeft:10,
    fontWeight:'bold',
    
  }
})
export default AddStatus
