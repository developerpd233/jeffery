import {StyleSheet, Dimensions, Platform} from "react-native";
import {themes} from "../../../theme/colors";

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({
    maincontainer:{
    },
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        paddingHorizontal: 20,
        // paddingBottom: 15,
        // marginVertical:20
    },

    center: {
        flexGrow: 1,
        justifyContent: 'center'
    },

    list: {
        marginHorizontal: -15  ,
        // backgroundColor:'red'
        },

    sliderContainer: {
        marginTop: 20
    },
    sliderArrowRight: {
        fontSize: 16,
        color: '#B4B4B4',
        paddingLeft: 15,
    },

    singleSlide: {
        width: width - 40,
        height: 280,
        borderRadius: 10,
        overflow: 'hidden',
    },
    singleSlideImage: {
        width: '100%',
        height: '100%',
    },

    sliderBottomContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    miniSlider: {
        flex: 1,
        // marginLeft: -20,
    },
    miniSliderInner: {
       // paddingHorizontal: 15
    },
  


   

    normalTitle: {
        fontSize: 26,
        color: themes['light'].colors.tertiary,
        fontFamily: themes.font.medium,
        fontWeight:'700',
        textAlign:'center',
        alignSelf:'center',
        marginRight:5,
        lineheight: 34
    },

    normalSubTitle: {
        fontSize: 26,
        color: themes['light'].colors.primary,
        fontFamily: themes.font.medium,
        fontWeight:'700',
        textAlign:'center',
        alignSelf:'center',
        marginRight:5,
        lineheight: 34
    },

    quantityContainerIcon: {
        color: themes['light'].colors.primary,
        fontSize: 12,
        opacity: 0.50,
        marginLeft: 10,
        marginTop: Platform.OS === 'ios' ? 0 : 2
    },

    subTitle: {
        fontSize: 12,
        color: themes['light'].colors.lightGray,
        fontFamily: themes.font.regular,
        marginBottom: 5
    },
    title: {
        fontSize: 14,
        color: themes['light'].colors.tertiary,
        fontFamily: themes.font.regular,
        fontWeight:'400',

    },

    price: {
        fontSize: 30,
        color: themes['light'].colors.tertiary,
        fontFamily: themes.font.medium,
        fontWeight:'600',
    },

    text: {
        fontSize: 13,
        color: themes['light'].colors.tertiary,
                fontFamily: themes.font.regular,
                textAlign:'center',
                width:Dimensions.get('screen').width * 0.6,
                
                alignSelf:'center',
                marginBottom:20,
    },
   

    section: {
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    sectionContent: {
        marginTop: 10,
        marginBottom: 5
    },
    sectionContentItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionContentItemDot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: themes['light'].colors.primary,
        marginRight: 10,
        marginLeft: 3
    },
    sectionPoints: {
        fontSize: 14,
        color: themes['light'].colors.fontLowColor,
        fontFamily: themes.font.regular,
        marginVertical: 5
    },

    pageTitle: {
            fontSize: 22,
            fontFamily: themes.font.medium,
            color: themes['light'].colors.fontColor,
            textAlign: 'center',
            marginBottom: 25,
            marginTop: 10,
            lineHeight: 20
    },


    textArea: {
        borderWidth: 1,
        color:'#000',
        borderRadius: 10,
       
        borderColor: themes['light'].colors.lightBorderColor,
        paddingVertical: 25,
        paddingHorizontal: 15,
    },
    textAreaInput:{
        minHeight: 125,
        padding: 10,
        color: themes['light'].colors.fontLowColor,
    },
    noBorderAndNoShadow: {
        borderColor: 'transparent',
        elevation: 0,
        shadowColor: 'transparent',
        marginBottom: -5
    },
    minusView: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      minusText: { fontSize: 28, color: '#565656' },
      countText: { fontSize: 16, color: '#565656' },
      plusText: { fontSize: 19, color: '#565656' },
      buttonStyle:{
        width:170,
        marginVertical:5,
        marginHorizontal:5
      },
      borderBtn:{
        backgroundColor:'#FFF'
      },buttonText:{
        color: themes['light'].colors.fontColor,

      }

});
export default Styles
