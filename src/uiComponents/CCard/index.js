import { View, Image,Text , TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import { styles } from './styles'
import { Profile  , Heart , Share , ProfileIcon, Red_heart} from '../../assets'
import {IMAGE_URL} from "../../config/webservices"





const CCard = (props) => {
    const {profileName,profileSubHead='1st Positon, 7 Votes' ,Profile, ProfileIcon , onPress ,Positon ,Votes , mainContainer , icon= Heart , onHeartPress , } = props
        console.log("🚀 ~ file: index.js ~ line 13 ~ CCard ~ ProfileIcon",IMAGE_URL+ProfileIcon)
        const [heart, setheart] = useState(false)
    return (
        <View onPress={onPress} style={[styles.container , mainContainer]}>
            
            <Image style={styles.image} source={{uri:IMAGE_URL + Profile}} resizeMode="cover" />
            <View style={styles.icons}>
                <TouchableOpacity onPress={()=> setheart(!heart)}>
                <Image style={styles.heart} source={!heart   ? icon : Red_heart} resizeMode='contain' />

                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.share} source={Share} resizeMode='contain' />
                    
                </TouchableOpacity>
            </View>
            <Image style={styles.profileIcon} resizeMode='contain' source={{uri:`${IMAGE_URL}${ProfileIcon}`}} />
            <TouchableOpacity onPress={onPress} style={styles.profileData}>  
            <Text style={styles.profileName} >{profileName}</Text>
            <Text style={styles.proFileSubHead}>{`${Positon} Positon, ${Votes} Votes`}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CCard