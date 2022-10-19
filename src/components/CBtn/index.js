import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {styles}  from './styles'
// import { Upload } from '../../assets'

const CBtn = (props) => {
   const {icon,title} = props
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.icon} source={icon}/>
    </TouchableOpacity>
  )
}

export default CBtn
