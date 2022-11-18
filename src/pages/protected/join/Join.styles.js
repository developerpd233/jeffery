import {StyleSheet, Dimensions, Platform} from "react-native";
import {themes as theme , themes} from "../../../theme/colors";

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({
    maincontainer:{
    },
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        paddingHorizontal: 20,
        paddingBottom: 15,
        marginVertical:20,
        marginBottom:80,

    },
    text: {
        fontSize: 13,
        color: themes['light'].colors.tertiary,
                fontFamily: themes.font.regular,
                textAlign:'center',
                width:Dimensions.get('screen').width * 0.6,
                marginTop:-15,
                alignSelf:'center',
                // marginBottom:20,
    },
    inputInnerContainerStyle:{
        height:100,
        alignItems:'flex-start',
        justifyContent:'flex-start'
        
    },
    
    card: {
        borderRadius: 10,
        // backgroundColor: theme['light'].colors.tertiary,
        backgroundColor:'rgba(255, 255,255,.15)',
        marginVertical:20,
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    cardHeader: {
        marginBottom: 10,
        alignItems:'center'
    },
    cardHeaderTitle: {
        fontSize: 22,
        fontFamily: theme.font.medium,
        color: theme['light'].colors.tertiary,
        marginBottom: 10,
        lineHeight:36,
        fontWeight:'500'
    },
    cardHeaderSubTitle: {
        fontSize: 14,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.primary,
        marginBottom: 10,
        lineHeight:24,
        fontWeight:'400'
    },
    lableandSubLabelStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    cardBody: {
        marginBottom: 15
    },
    imageText:{
        fontSize: 12,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.primary,
        textAlign:'center'
    },
    imgView:{ height:70 , width:70 , margin:5 , alignItems:'center' , justifyContent:'center' , borderWidth:1, borderColor:'#FFF' , opacity:0.6}
    ,buttonStyle:{
        fontSize:14,
        fontFamily:themes.font.extraLight,
        fontWeight:'600'
    },
})
export default Styles