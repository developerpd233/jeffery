


import {StyleSheet, Dimensions, Platform} from "react-native";
import {themes} from "../../../theme/colors";

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({ 
    list:{
        marginTop:10,
        
    } , buttonStyle:{ 
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
    marginHorizontal: -20 ,
    marginVertical:10

},
mainContainer:{
    width:Dimensions.get('screen').width*0.91,
    alignItems:'center',
    alignSelf:'center',
},
})
export default Styles      