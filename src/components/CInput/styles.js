import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.CloudBurst,
        height: 35,
        width: responsiveWidth(90),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:3,
        paddingHorizontal:10
    },
    ph: {
        // width: responsiveWidth(75),
        backgroundColor: Colors.CloudBurst,
        height: 35,
        fontSize:10,
        flex:1
    },
    icon: {
        backgroundColor: Colors.CloudBurst,
        height: 15,
        width:15,
        right:5
    }

})