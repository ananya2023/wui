import { StyleSheet } from "react-native";
import {theme} from "./theme";
export const fabStyles =  StyleSheet.create({
    style:{
       alignItems:"center",
       justifyContent:"center",
       width:60,
       height:60,
       position:"absolute",
       top:550,
       left:280,
      backgroundColor:theme.colors.white,
       borderRadius:100,
      elevation:5,
    //   shadowColor:theme.colors.primary,
       shadowOpacity : 0.4,
     //shadowOffset:{width:0,height:2}
    }
})