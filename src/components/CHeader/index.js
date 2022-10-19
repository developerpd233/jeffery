import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ArrowIcon } from '../../assets'


const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerMain}>
                <Image style={styles.arrow} source={ArrowIcon} />
                <Text style={styles.headerText}>Country</Text>
            </View>
            <Text style={styles.textStyle}>Explore all contests</Text>

        </View>
    )
}

export default index