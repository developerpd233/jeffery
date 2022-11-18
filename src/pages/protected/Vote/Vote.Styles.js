import {StyleSheet, Dimensions, Platform} from "react-native";
import {themes} from "../../../theme/colors";

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({  

    cardmainContainer:{
        width:Dimensions.get('screen').width*0.91,
        alignItems:'center',
        alignSelf:'center',
    },
    VotingViews:{
        backgroundColor:themes['light'].colors.white,
        marginHorizontal:5,
        padding:10,
        paddingVertical:20

    },
    userDesc:{marginHorizontal:25 , justifyContent:'center' , marginVertical:10 ,} ,
    desc:{
        color:themes['light'].colors.tertiary,
        fontSize:10.5,
        fontFamily:themes.font.regular,
        lineHeight:15, 
        fontWeight:'400',
        letterSpacing:0.1,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    voteList:{
        flexDirection:'row' , justifyContent:'space-between' , paddingVertical:5  ,
        borderBottomColor:themes['light'].colors.white5,
        borderBottomWidth:0.5
    },
    voteText:{
        color:themes['light'].colors.tertiary,
        fontSize:14,
        fontFamily:themes.font.regular,
        letterSpacing: -0.02
        
    },
    inputInnerContainerStyle:{
        
        height:30,
        minHeight:30,
        marginLeft:5,
        width:50,
        marginVertical:-13
    },
    input:{ paddingTop:-17 , width:35, height:20 ,padding:0 , paddingLeft:5},
   
    USD:{
        backgroundColor: themes['light'].colors.primary,
        height:30,
        marginTop:3,
        paddingHorizontal:6,
        alignItems:'center',
        justifyContent:'center'
    },
    usdText:{
            color:themes['light'].colors.tertiary,
            fontSize:12,
            fontFamily:themes.font.regular,
            
    },
    confirmVote:{
        color:themes['light'].colors.tertiary,
        fontSize:20,
        fontFamily:themes.font.regular,
        fontWeight:'700',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
        PrizeView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:themes['light'].colors.white,
        marginHorizontal:5,
        padding:10,
        alignSelf:'center',
        width:200,
        marginBottom:90,
    },
    voteAmount:{
        color:themes['light'].colors.tertiary,
        fontSize:12,
        fontFamily:themes.font.regular,
        letterSpacing: -0.02
    },
    winText:{
        color:themes['light'].colors.tertiary,
        fontSize:12,
        fontFamily:themes.font.regular ,
        textAlign:'center',
        lineHeight:16,
        paddingVertical:5
        
    },
    buttonStyle:{
        marginTop:20,
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: 20
    },
    header: {
        // alignItems: 'center',
        paddingVertical: 10
    },
    headerLogo: {
        width: 130,
        height: 85,
        alignSelf:'center',
        marginBottom:10
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(124, 128, 97, 0.7)',
        paddingTop: 200,
        paddingHorizontal: 20
    },
    modalInnerContainer: {
        flex: 1,
        backgroundColor: themes['light'].colors.tertiary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    card: {
        borderRadius: 10,
        // backgroundColor: theme['light'].colors.tertiary,
        backgroundColor:'rgba(255, 255,255,0.08)',
        paddingHorizontal: 15,
        paddingVertical: 30,
        marginBottom:90

    },
    cardHeader: {
        marginBottom: 10,
        alignItems:'center'
    },
    cardHeaderTitle: {
        fontSize: 22,
        fontFamily: themes.font.medium,
        color: themes['light'].colors.tertiary,
        marginBottom: 30,
        lineHeight:36,
        textAlign:'center',
        fontWeight:'500',
    },
    cardHeaderSubTitle: {
        fontSize: 14,
        fontFamily: themes.font.regular,
        color: themes['light'].colors.primary,
        marginBottom: 10,
        lineHeight:24,
        fontWeight:'400'
    },
    cardBody:{
    }
    
})
export default Styles