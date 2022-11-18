import {StyleSheet, Platform} from "react-native";
import {themes as theme} from "../../theme/colors";
export const headerHeight = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    headerLogo: {
        flex: 1 ,
        marginLeft:20,
        marginTop:10,
        // marginRight:-10
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerLogoImage: {
        width: 140.6,
        height: 36.62
    },
    container: {
        height: headerHeight,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: theme['light'].colors.transparent,

    },
    headerStyle: {
        backgroundColor: theme['light'].colors.transparent,
        paddingVertical: 10,
        position: 'relative',
        zIndex: 1
    },
    headerTransparentStyle: {
        backgroundColor: 'transparent',
    },
    headerLight: {
        color: theme['light'].colors.tertiary,
    },
    headerCartLight: {
        borderColor: 'rgba(227, 227, 224, 0.2)',
        backgroundColor: 'rgba(227, 227, 224, 0.1)',
    },
    headerTitleStyle: {
        color: theme['light'].colors.tertiary,
        fontFamily: theme.font.bold,
        // fontWeight:"700",
       
        fontSize: 24,
        lineHeight: 24,
        marginTop: 5,
        paddingTop:6,
        marginHorizontal: 15,
        flex: 1,
        textAlign: 'center',
    },
    headerSubTitleStyle: {
        color: theme['light'].colors.tertiary,
        fontFamily: theme.font.regular,
        fontWeight:"400",   
       
        fontSize: 12,
        lineHeight: 18,
        marginTop: 10                                                                                      ,
        flex: 1,
        textAlign: 'center',         
    },
    headerButton: {},
    headerButtonIcon: {
        fontSize: 20,
        color: theme['light'].colors.tertiary,
    },
    otherOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:10
    },
    otherOptionsButtonSpace: {
        marginRight: 20
    },
    lightColor: {
        color: theme['light'].colors.tertiary
    },
    lightBackgroundColor: {
        backgroundColor: theme['light'].colors.tertiary
    },


    headerCartButton: {
        width: 35,
        height: 35,
        backgroundColor: theme['light'].colors.primary,
        marginRight:-20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerCartBadge: {
        backgroundColor: theme['light'].colors.primary,
        minWidth: 12,
        minHeight: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 8,
        right: 5,
        zIndex: 1,
        padding: 3
    },
    headerCartBadgeText: {
        fontSize: 8,
        color: theme['light'].colors.tertiary,
        fontFamily: theme.font.regular
    },
    headerCartButtonIcon: {
        marginTop: 6,
        marginLeft: -5,
        fontSize: 24,
        color: theme['light'].colors.primary,
    },
    sideLogo:{
        width:50,
        height:36,resizeMode:'contain',
        
    },
    centerInput:{
        flex:1,
        width:100,
    },
    inputInnerContainerStyle:{
        height:40,
        minHeight:35
    },
    rightTextStyles:{
        color: theme['light'].colors.tertiary,
        fontFamily: theme.font.regular,
        fontWeight:"400",   
       
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
    }
});

export default styles
