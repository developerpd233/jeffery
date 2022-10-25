import { StyleSheet , Dimensions } from "react-native";
import {themes} from "../../theme/colors";
import {getLayoutDirection} from "../../utils/methods";

export default StyleSheet.create({
    scrollViewContainer:{
    }
    ,dropdown:{
        backgroundColor:themes['light'].colors.white1
    },
    btn:{
        backgroundColor:themes['light'].colors.white1,
        width:Dimensions.get('window').width*0.8,
        justifyContent:'space-between'
    },
    btntxt:{
        color:themes['light'].colors.white5,
        fontFamily:themes.font.regular,
        fontSize:11,
        textAlign:'left',
        marginLeft:3
    },btntxt2:{
        color:themes['light'].colors.white5,
        fontSize:12,
        textAlign:'left',
    }
 })