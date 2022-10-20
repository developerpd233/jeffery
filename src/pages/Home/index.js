import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CBtn, CCard, CFooter, CHeader, CInput, CPriceBox, } from '../../components'
import { styles } from './styles'
import { Upload } from '../../assets'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
<Text style={styles.titlesOne}>Are You One In
A <Text style={styles.innerText}>Million?</Text></Text>
<Text style={styles.titlesTwo}>Are You Beautiful And Sexy And
You Know It ?</Text>

      </View>
      <View style={styles.btn}>
        <CBtn title='Join The Contest' icon={Upload} />
      </View>
      <View style={styles.priceBoxs}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          numColumns={2}
          renderItem={() => {
            return (
              <View style={styles.priceBox}>
                <CPriceBox />
              </View>
            )
          }}
        />
      </View>
    </View>



  )
}

export default Home
