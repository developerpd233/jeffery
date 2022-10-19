import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

const index = (props) => {
    const {title='Boys', months='Monthly Contest', price='$ 0.43' } = props
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.months}>{months}</Text>
      <Text style={styles.price}>{price}</Text>

    </View>
  )
}

export default index