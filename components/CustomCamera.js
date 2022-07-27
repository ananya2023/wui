import React from 'react'
import { View,Text,TouchableOpacity,FlatList,Image,StyleSheet} from "react-native"
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { theme } from '../theme'
const CustomCamera = () => {
  return (
    <View style={styles.container}>
          <View style={styles.footer}>
              <View style={styles.medias}>
                <FlatList
                />
              </View>
              <View style={styles.buttons}>
                  <TouchableOpacity>
                    <Icon name="flash" color={theme.colors.white} size={30}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="camera-iris" color={theme.colors.white} size={100}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon name="camera-party-mode" color={theme.colors.white} size={30}/>
                  </TouchableOpacity>             
                  
                </View>
            </View>
    </View>
    
  )
}

const styles =  StyleSheet.create({
    container : {
        flex:1,
    },
    camera:{

    },
    footer : {
        position:'absolute',
        bottom:0,
        width:'100%',

    },
    medias:{

    },
    media:{

    },
    buttons : {
        flex:1,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:20


    },
})
export default CustomCamera
