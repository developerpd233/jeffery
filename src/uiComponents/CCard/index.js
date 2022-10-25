import { View, Image,Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Profile  , Heart , Share , ProfileIcon} from '../../assets'






const CCard = (props) => {
    const {profileName='Michael Robert',profileSubHead='1st Positon, 7 Votes' , onPress , mainContainer} = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container , mainContainer]}>
            <Image style={styles.image} source={Profile} resizeMode="cover" />
            <View style={styles.icons}>
                <Image style={styles.heart} source={Heart} />
                <Image style={styles.share} source={Share} />
            </View>
            <Image style={styles.profileIcon} source={ProfileIcon} />
            <View style={styles.profileData}>  
            <Text style={styles.profileName} >{profileName}</Text>
            <Text style={styles.proFileSubHead}>{profileSubHead}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CCard