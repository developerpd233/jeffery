import {StyleSheet, Dimensions, Platform} from "react-native";
import {themes} from "../../../theme/colors";

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({ 
    list:{
        marginTop:10,
        
    } , 
    conatiner:{
        marginVertical:100
    },
    buttonStyle:{ 
        height:62,
        marginVertical:10,
        borderRadius:8,
        alignItems:'center'
},
    buttonText:{
        fontSize:26,
        fontFamily:themes.font.regular,
        fontWeight:"700"
    },listItemView:{    
        backgroundColor:themes['light'].colors.tertiary
    },price:{
        fontSize:8,
    },subTitleStyles:{
        fontSize:10
    },title:{
        fontWeight:'700',
        fontSize:14,
        fontFamily: themes.font.semiBold
    },
    list:{
        marginHorizontal: -15 ,
        marginVertical:20


    },
    ContestList:{
        marginHorizontal: -25 ,
        marginVertical:10,

    },
    ContestprofileList:{
        marginTop:10,
    },
    
    normalTitle: {
        fontSize: 24,
        color: themes['light'].colors.tertiary,
        fontFamily: themes.font.medium,
        fontWeight:'700',
        textAlign:'center',
        alignSelf:'center',
        marginRight:5,
        lineheight: 34
    },
    
    buttonStyle2:{ 
        height:50,
        marginVertical:10,
        alignItems:'center',
        margin:15
},
cardmainContainer:{
    width:Dimensions.get('screen').width*0.91,
    alignItems:'center',
    alignSelf:'center',
},
ProfileIcon:{
    width:50, 
    height:50,
    marginHorizontal:10,
    marginVertical:10,

},
commentProfile:{
    width:40, 
    height:40,
    marginHorizontal:10,
    marginVertical:5,

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
listVotes:{
    color: themes['light'].colors.primary,
    fontFamily: themes.font.medium,
    fontSize:10,
    paddingLeft:13,
    fontWeight:'400',
},
imgView:{
    width:Dimensions.get('screen').width * 0.43,
    marginHorizontal:10,
    height:90,
    marginBottom:60,

},
videoView:{
    width:Dimensions.get('screen').width * 0.9,
    marginHorizontal:10,
    height:90,
    marginBottom:60,
} , 
Profile:{
    width:Dimensions.get('screen').width * 0.43,
    height:130,
    borderRadius:5,
    marginHorizontal:5,

},
video:{
    width:Dimensions.get('screen').width * 0.9,
    height:130,
    borderRadius:5,
    marginHorizontal:5,
},
desText:{
    color: themes['light'].colors.tertiary,
    padding:10,

},
descView:{
    backgroundColor:themes['light'].colors.white

},
deccriptionView:{
    padding:20,
    marginHorizontal:-20,
    backgroundColor:themes['light'].colors.white
},
deccriptionText:{
    color:themes['light'].colors.tertiary,
    fontFamily: themes.font.light,
    fontSize:10

},
    commentView:{
    paddingVertical:5,
    padding:5,
    marginVertical:10,
   
    


},
inputView:{
    flexDirection:'row' ,
},
commentSend:{
    width:50,
    padding:15,  
    height:20,
   

    marginLeft:0
},
commentText:{
    color:themes['light'].colors.white5,
    fontSize:12,
    fontFamily:themes.font.regular

},
renderComment:{
            borderBottomWidth:0.5,
        borderBottomColor:themes['light'].colors.white5,

},
ProfileText:{
    color:themes['light'].colors.tertiary,
    fontSize:13,
    fontWeight:'200',
    fontFamily: themes.font.regular,
    padding:5


}
})

export default Styles
