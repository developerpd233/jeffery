import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Profile, Heart, Share, ProfileIcon, Red_heart } from '../../assets'
import { IMAGE_URL } from "../../config/webservices"
import { Favourite } from '../../pages/protected'





const CCard = (props) => {
    const { profileName,
        FavouriteOnPress,
        heart,
        Profile,
        userProfile,
        onPress,
        Positon,
        Votes,
        mainContainer,
        icon = Heart
    } = props
    return (
        <View onPress={onPress} style={[styles.container, mainContainer]}>
            <Image style={styles.image} source={{ uri: IMAGE_URL + Profile }} resizeMode="cover" />
            <View style={styles.icons}>
                <TouchableOpacity onPress={FavouriteOnPress}>
                    <Image style={styles.heart} source={heart ? Red_heart : icon} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.share} source={Share} resizeMode='contain' />
                </TouchableOpacity>
            </View>
            <Image style={styles.profileIcon} resizeMode='contain' source={userProfile ? { uri: `${IMAGE_URL}${userProfile}` } : ProfileIcon} />
            <TouchableOpacity onPress={onPress} style={styles.profileData}>
                <Text style={styles.profileName} >{profileName}</Text>
                <Text style={styles.proFileSubHead}>{`${Positon} Positon, ${Votes} Votes`}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CCard