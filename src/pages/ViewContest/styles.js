import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Color'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Rhino,
        height: responsiveHeight(100),
    },
    searchInput: {
        alignSelf: 'flex-end',
      
    },
    titleText: {
     alignItems:'center',
    },
    titleTextStyle: {
        fontSize:17,
        color: Colors.White,
        fontWeight: '700',
    },
    uploadIcon: {
        alignSelf: 'center'
    },
    card: {
        marginVertical:5,
        marginHorizontal:5,
    
    },
    flatList: {
        alignSelf: 'center'
    },
   
})