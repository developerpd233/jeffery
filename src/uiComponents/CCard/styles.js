import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { themes } from '../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        height: responsiveHeight(30),
        width: responsiveWidth(43),
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical:10,
        marginHorizontal:9,
    },
    image: {
        borderEndColor: Colors.Black,
        height: responsiveHeight(20),
        width: '100%',
    },
    icons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        padding: 10,
    },
    heart: {
        height: 20,
        width: 20,

    },
    share: {
        height: 12,
        width: 14,

    },
    profileIcon: {
        height: 53,
        width: 53,
        bottom: 35,
        alignSelf: 'center'

    },
    profileData: {
        flexDirection: 'column',
        width: responsiveWidth(43),
        bottom: 35,


    },
    profileName: {
        fontSize: 11,
        fontWeight: "700",
        color: themes['light'].colors.dark,
        fontFamily: themes.font.medium,
        // color: Colors.Black,
        textAlign: 'center',
        marginVertical:3,
    },
    proFileSubHead: {
        fontSize: 10,
        fontWeight: "400",
        textAlign: 'center',
        color: themes['light'].colors.primary,
        fontFamily: themes.font.regular,

    }
})