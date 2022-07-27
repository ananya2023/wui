import React, { useLayoutEffect } from 'react'
import {StyleSheet,Text,View} from "react-native"
import { ThemeColors } from 'react-navigation'

import {theme} from "../theme"
const  CameraScreen = () =>{
  //  useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     title:"",
  //   })
  //  },[])



  return (
    <View  style={styles.container}>
    <Text>
     camerascreen
    </Text>
    </View>
  )
}
const styles =  StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:theme.colors.black,
  },
})
export  default CameraScreen
