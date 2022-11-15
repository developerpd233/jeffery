import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { Fonts } from '../../theme/Font';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Rhino,
        height: responsiveHeight(100)
    },
    titles: {
        alignItems: 'center'
    },
    titlesOne: {
        color: Colors.White,
        fontWeight: '700',
        fontSize: 18,
        backgroundColor:'red',
        width: responsiveWidth(55),
        textAlign: 'center',
        fontFamily:Fonts.PoppinsBlack
    },
    innerText: {
        color: Colors.DeepSkyBlue,
    },
    titlesTwo: {
        color: Colors.White,
        fontWeight: '300',
        fontSize: 10,
        width: responsiveWidth(60),
        textAlign:'center'

    },
    btn: {
        alignItems: 'center',
        marginTop:6,
        
    },
    priceBoxs: {
        alignItems: 'center',
        marginTop:10
        // alignSelf:'center'

    },
    priceBox: {
        padding: 3,
    },


})