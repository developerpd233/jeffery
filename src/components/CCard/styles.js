import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
console.log('responsiveWidth(32)', responsiveWidth(72), responsiveHeight(45))

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        height: responsiveHeight(30),
        width: responsiveWidth(43),
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        borderEndColor: Colors.Black,
        height: responsiveHeight(20),
        width: responsiveWidth(43),
    },
    icons: {
        width: responsiveWidth(43),
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        padding: 5
    },
    heart: {
        height: 12,
        width: 14,

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
        color: Colors.Black,
        textAlign: 'center'
    },
    proFileSubHead: {
        fontSize: 10,
        fontWeight: "400",
        color: Colors.DeepSkyBlue,
        textAlign: 'center'

    }
})