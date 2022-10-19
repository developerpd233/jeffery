import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'
import {styles}  from './styles'
import { Colors } from '../../theme/Color'
import {  SearchIcon } from '../../assets'


const index = (props) => {
    const {imgUrl, placeholder = 'Search'} = props
  return (
    <View style={styles.container}>
             <TextInput placeholder={placeholder} placeholderTextColor="rgba(255, 255, 255 , 0.5)" style={styles.ph}/>
            <Image style={styles.icon} source={SearchIcon} />
    </View>
  )
}

export default index