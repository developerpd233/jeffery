import {Dimensions, StyleSheet} from 'react-native';
import { Colors } from '../../theme/Color';
import {themes as theme, themes} from "../../theme/colors";

export default StyleSheet.create({
    imageView: {
        flex: 1,
        // ...StyleSheet.absoluteFillObject,
        // zIndex: 100,
        justifyContent: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
      },
      text: {
        fontSize: 14,
        // fontFamily: Fonts.type.MontserratRegular,
        marginLeft: 8,
        color:themes['light'].colors.primary
      },
      container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.85,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 24,
      },
    
});
