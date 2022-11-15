import {StyleSheet, Dimensions, Platform} from "react-native";
import {themes} from "../../../theme/colors";

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({
    cardmainContainer:{
        width:Dimensions.get('screen').width*0.91,
        alignItems:'center',
        alignSelf:'center',
    },
    ListHeaderComponentStyle:{
        borderBottomWidth:1,
          marginHorizontal:15,
          paddingBottom:5,
          borderColor:themes['light'].colors.white2
      },
      listHeaderText:{
        color: themes['light'].colors.tertiary,
        fontFamily: themes.font.medium,
        
        fontWeight:'600'
    
    },
    buttonStyle2:{
        marginVertical:10
    },
    listVotes:{
        color: themes['light'].colors.primary,
        fontFamily: themes.font.medium,
        fontSize:10,
        paddingLeft:13,
        fontWeight:'400',
    }, 
    ProfileIcon:{
        width:50, 
        height:50,
        marginHorizontal:10,
        marginVertical:15,
    
    },
    noPhote:{
        color: themes['light'].colors.tertiary,
        fontFamily: themes.font.regular,
        fontSize:15,
        fontWeight:'500',
        padding:10,
        marginHorizontal:10,
    },
    selected:{
        borderBottomColor:themes['light'].colors.primary, borderBottomWidth:2  ,  paddingHorizontal:25
    },ProfileSection:{paddingTop:20,flexDirection:'row' , marginHorizontal:20, justifyContent:'space-evenly' , borderBottomWidth:1, borderBottomColor:themes['light'].colors.white2 , marginBottom:10, },
    Profile:{
        width:Dimensions.get('screen').width * 0.48,
        height:130,
        borderRadius:5,
        marginHorizontal:5,
    
    },
    imgView:{
        width:Dimensions.get('screen').width * 0.5,
        marginHorizontal:10,
        marginTop:20,
        height:150,
        alignSelf:'center',
    
    },



    
    mainView:{
        marginHorizontal:20,
      },
      imageView:{
          justifyContent:'center',
          alignItems:'center',
      },
      userImage:{
          backgroundColor:'green',
          height:150,
          width:150,
          borderRadius:100
      },
      textView:{
          flexDirection:'row',
          justifyContent:'space-between',
          marginVertical:10,
          borderBottomWidth:1,
          borderBottomColor:'#999',
          alignItems:'center',
      },
      key:{
          fontSize:20,
          fontWeight:'normal',
          color:'#fff'
      },
      value:{
          flex:1,
          color:'#fff',
          fontSize:22,
          marginLeft:10
      }
  })

export default Styles