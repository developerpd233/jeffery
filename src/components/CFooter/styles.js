import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        width: responsiveHeight(48),
        height: 60,
        backgroundColor: Colors.DeepSkyBlue,
        borderRadius: 30,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    homeIcon: {
        height: 20,
        width: 18
    },
    menuIcon: {
        height: 20,
        width: 18
    },
    tissueBox: {
        height: 20,
        width: 18
    },
    heartFooterIcon: {
        height: 20,
        width: 18
    }
})