import { View, Image,Text , TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import { styles } from './styles'
import { Profile  , Heart , Share , ProfileIcon, Red_heart} from '../../assets'






const CCard = (props) => {
    const {profileName='Michael Robert',profileSubHead='1st Positon, 7 Votes' , onPress , mainContainer , icon= Heart , onHeartPress , } = props
        const [heart, setheart] = useState(false)
    return (
        <View onPress={onPress} style={[styles.container , mainContainer]}>
            
            <Image style={styles.image} source={Profile} resizeMode="cover" />
            <View style={styles.icons}>
                <TouchableOpacity onPress={()=> setheart(!heart)}>
                <Image style={styles.heart} source={!heart   ? icon : Red_heart} resizeMode='contain' />

                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.share} source={Share} resizeMode='contain' />
                    
                </TouchableOpacity>
            </View>
            <Image style={styles.profileIcon} source={ProfileIcon} />
            <TouchableOpacity onPress={onPress} style={styles.profileData}>  
            <Text style={styles.profileName} >{profileName}</Text>
            <Text style={styles.proFileSubHead}>{profileSubHead}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CCard