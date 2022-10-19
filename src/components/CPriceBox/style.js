import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


export const styles = StyleSheet.create({
    box: {
        height: responsiveHeight(18),
        width: responsiveWidth(46),
        backgroundColor: Colors.CloudBurst,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
     title: {
        fontSize:10,
        color: Colors.White
     },
     months: {
        fontSize:10,
        color: Colors.White
     },
     price: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.White,
        marginTop:4
     }

})