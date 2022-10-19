import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { HeartFooterIcon, HomeIcon, MenuIcon, TissueBox } from '../../assets'

const index = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.homeIcon} source={HomeIcon} />
            <Image style={styles.menuIcon} source={MenuIcon} />
            <Image style={styles.tissueBox} source={TissueBox} />
            <Image style={styles.heartFooterIcon} source={HeartFooterIcon} />
        </View>
    )
}

export default index