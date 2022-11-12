import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Colors } from '../../theme/Color'
import { search_icon } from '../../assets'


const index = (props) => {
  const { imgUrl, onChangeText,onPress , placeholder = 'Search' } = props
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} placeholderTextColor="rgba(255, 255, 255 , 0.5)" style={styles.ph} onChangeText={onChangeText} />
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.icon} source={search_icon} />
      </TouchableOpacity>
    </View>
  )
}

export default index