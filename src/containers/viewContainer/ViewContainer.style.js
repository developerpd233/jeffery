import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    imageViewContainer: {
        flex: 1,
    },
    viewContainer: {
        // flex: 1,
        height:Dimensions.get('screen').height,
        backgroundColor: 'transparent'
    },
});
