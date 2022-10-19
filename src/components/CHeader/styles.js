import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { Colors } from "../../theme/Color";


export const styles = StyleSheet.create({
    container: {
        height: 60,
        width: responsiveWidth(100),
        backgroundColor: Colors.Rhino,
        flexDirection: "column",
    },
    headerMain: {
        flexDirection: "row",

    },
    arrow: {
        height: 15,
        width: 18,
        top:5,
        left:5
    },
    headerText: {
        color: Colors.White,
        fontSize: 16,
        left: responsiveWidth(30),
        fontWeight:'700'

    },
    textStyle: {
        fontSize: 10,
        color: Colors.White,
        textAlign: "center",
        top:3

    }

})