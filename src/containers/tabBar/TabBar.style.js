import {StyleSheet , Platform} from "react-native";
import {themes as theme, themes} from "../../theme/colors";

const Styles = StyleSheet.create({

    tabContainer: {
        backgroundColor:"#22315C",
        overflow:'hidden',
        
        // position: 'relative',
        // marginTop: -0
    },
    absoluteFillObject: {
        backgroundColor: themes['light'].colors.primary,
        borderRadius:500,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        overflow:'hidden',

    },
    tabInnerContainer: {
        flexDirection: 'row',
        // height: 55,
    },
    spotLight: {
        height: '100%',
        alignItems: 'center'
    },
    spotLightInner: {
        height: 65,
        width: 65,
        borderRadius: 65,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.10)'
    },
    tab: {
        flex: 1,
        // paddingVertical: 15,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginVertical: 5,
    },
    tabIcon: {
        fontSize: 28,
        color: themes['light'].colors.tertiary,
    },
    tabText: {
        fontSize: 8,
        color: themes['light'].colors.tertiary,
        fontFamily: themes.font.regular,
        marginTop: 5
    },
});
export default Styles
