import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DeepSkyBlue,
        height: 35,
        width: responsiveWidth(90),
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:3,
        
    },
    text: {
        fontSize: 10,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors.White,
        paddingRight:10,
    },
    icon: {
        height: 15,
        width: 15,

    }
})