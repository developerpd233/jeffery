import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CBtn, CCard, CFooter, CHeader, CInput, } from '../../components'
import { styles } from './styles'
import { Upload } from '../../assets'

const ViewContest = (props) => {
    const { titleName = 'Contest 1' } = props
    return (
        <View style={styles.container}>

            <View style={styles.searchInput}>
                <CInput />
            </View>

           <View style={styles.titleText}>
                <Text style={styles.titleTextStyle}>{titleName}</Text>
            </View>

            <View style={styles.uploadIcon}>
                <CBtn icon={Upload} />
            </View> 
            <View style={styles.flatList}>
            <FlatList
            data={[1,2,3,4]}
            numColumns={2}
            renderItem={()=>{
                return(
                    <View style={styles.card}>

                    <CCard />
            </View>

                )
            }}
            
            />

</View>

        </View>

    )
}

export default ViewContest
