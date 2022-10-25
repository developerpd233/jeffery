import {StyleSheet} from 'react-native';
import {themes as theme, themes} from "../../theme/colors";

export default StyleSheet.create({

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

    cardBottomText: {
        fontSize: 13,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.tertiary,
        textAlign: 'center',
        marginTop: 18
    },

    orContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    orContainerText: {
        fontSize: 20,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.fontColor,
    },

    bottomButton: {
    //   marginBottom: 20,
      backgroundColor:'transparent',
      borderWidth:1,
      borderColor:theme['light'].colors.tertiary,
      width:30,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      fontSize:10,
      borderRadius:100,
      marginHorizontal:10,
    },



    otpContainer: {
        alignItems:'stretch',
        marginBottom: 30,

    },
    inputInnerContainerStyle:{
        height:100,
        alignItems:'flex-start',
        justifyContent:'flex-start'
        
    },

    otpInputView : {
        height: 62,
        // width: '100%',
        marginBottom: 10,
        alignItems: 'stretch',
        // backgroundColor: 'red'
    },

    codeInputFieldStyle: {
        borderWidth: 1,
        borderColor: themes['light'].colors.secondary3,
        position: 'relative',
        fontSize: 20,
        fontFamily: themes.font.regular,
        color: themes['light'].colors.primary,
        borderRadius: 10,
        backgroundColor:  themes['light'].colors.secondary3,
        height: 62,
        // marginHorizontal: 5,
        minWidth: 62,
        maxWidth: 62,
        width: 'auto',
        flex: 1
    },

    codeInputHighlightStyle: {
        borderColor: themes['light'].colors.secondary,
        borderWidth: 2,
        color: themes['light'].colors.fontColor
    },

    linkButtonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%'
    },

    linkButtonWithIcon: {
        flexDirection: 'row',
    },
    linkButtonText: {
        fontSize: 14,
        color: themes['light'].colors.lightGray,
        fontFamily: themes.font.regular,
        marginRight: 5,
    },
    linkButtonOtherText: {
        color: themes['light'].colors.fontColor,
        fontFamily: themes.font.medium,
    },


    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(124, 128, 97, 0.7)',
        paddingTop: 200,
        paddingHorizontal: 20
    },
    modalInnerContainer: {
        flex: 1,
        backgroundColor: theme['light'].colors.tertiary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },buttonStyle:{
        fontSize:14,
        fontFamily:themes.font.extraLight,
        fontWeight:'600'
    },
    Icon:{
        color:themes['light'].colors.tertiary,
    },
    iconView:{
        flexDirection:"row",
        justifyContent:'center',
        marginVertical:15,
        marginBottom:-2,
        
        
    },
    filebuttonText:{
        fontSize:10,
        fontFamily:theme.font.regular,
    },
    filebuttonStyle:{
        // padding:10,
        paddingHorizontal:10,
        height:28                ,
    },fileChooseText:{
        color:themes['light'].colors.white5,
        fontFamily:themes.font.regular,
        paddingLeft:10,
        fontSize:12

        

    }
});
