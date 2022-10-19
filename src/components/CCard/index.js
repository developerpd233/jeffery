import { View, Image,Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Profile  , Heart , Share , ProfileIcon} from '../../assets'






const index = (props) => {
    const {profileName='Michael Robert',profileSubHead='1st Positon, 7 Votes'} = props
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Profile} resizeMode="contain" />
            <View style={styles.icons}>
                <Image style={styles.heart} source={Heart} />
                <Image style={styles.share} source={Share} />
            </View>
            <Image style={styles.profileIcon} source={ProfileIcon} />
            <View style={styles.profileData}>  
            <Text style={styles.profileName} >{profileName}</Text>
            <Text style={styles.proFileSubHead}>{profileSubHead}</Text>
            </View>
        </View>
    )
}

export default index