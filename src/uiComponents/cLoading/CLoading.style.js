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
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(2,17,65,0.8)',
        zIndex: 3,
    },
    loading: {
        color: theme['light'].colors.tertiary,
        fontSize: 32,

    },
    loadingText: {
        fontSize: 10,
        color: theme['light'].colors.tertiary,
        fontFamily: theme.font.medium,
        flexDirection:'column',
    },
    animation: {
        width: 100,
        height: 100
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
