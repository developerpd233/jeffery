import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text } from "react-native"
import { Container } from "../../../../containers";
import { CList, CListItem, CText, CButton, CLoading } from "../../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation , useIsFocused } from "@react-navigation/native";
import Styles from '../Contest.Style'
import { GET_CONTEST, IMAGE_URL ,GET_CONTEST_BY_COUNTRY,CONTESTANTS,WINNERS } from "../../../../config/webservices"
import ApiSauce from "../../../../services/networkRequest"
import {CInput} from "../../../../components"

const ContestType = (props) => {
  const { item } = props?.route?.params || {}
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const IsFocused = useIsFocused();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [countrySlug, setCountrySlug] = useState()

  const headerProps = {
    headerTitle: `${item.title}`,
    subtitle: "Explore all contests",
    showCart: false,
  };

  useEffect(() => {
    // setCountrySlug()
    handleApi()
  }, [IsFocused])


  const handleApi = async () => {
    try {
      setLoading(true)
      if(item.title == 'Monthly Contest'){
        const data = await ApiSauce.getWithoutToken(GET_CONTEST('monthly'))
       setData(data.data)
      }
      else if(item.title == 'Yearly Contest'){
        const data = await ApiSauce.getWithoutToken(GET_CONTEST('yearly'))
       setData(data.data)
      }
      else if(item.title == 'Video Contest'){
        const data = await ApiSauce.getWithoutToken(GET_CONTEST('video'))
       setData(data.data)
      }
      else if(item.title == 'Country'){
        const data = await ApiSauce.getWithToken(GET_CONTEST_BY_COUNTRY(countrySlug ? countrySlug :'United states' , 'country'))
        setData(data.data)
      }
      else if(item.title == 'State'){
        // alert('dcbjn')
        const data = await ApiSauce.getWithToken(GET_CONTEST_BY_COUNTRY(countrySlug ? countrySlug :'Alaska' , 'state'))
        setData(data.data)
      }
      else if(item.title == 'Professions'){
        const data = await ApiSauce.getWithToken(GET_CONTEST_BY_COUNTRY(countrySlug ? countrySlug :'modeling' , 'profession'))
        setData(data.data)
      }
      else if(item.title == 'Contestants'){
        const data = await ApiSauce.getWithToken(CONTESTANTS)
        setData(data.data)
      }
      else if(item.title == 'Winners'){
        const data = await ApiSauce.getWithToken(WINNERS)
        setData(data.data)
      }
    } catch (err) {
      console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    } finally {
      setLoading(false)
    }
  }

  const reduxState = useSelector(({ auth, root }) => {
    return {
      loading: root?.categoryLoading,
      data: [
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },

      ],
    };
  });

  const select = (item , index) => {
    navigation.navigate("ContestTypeDetails", {
      index,
      item
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <CListItem
        title={`Contest ${index}`}
        price={item.amount}
        subTitle={item?.orderNumber}
        image={IMAGE_URL + item?.image}
        titleStyles={Styles.title}
        priceStyle={Styles.price}
        subTitleStyles={Styles.subTitleStyles}
        listItemView={Styles.listItemView}
        onPress={() => select(item ,index)}
      />
    );
  };
  const onRefreshHandler = () => {
    // handleCategory();
  };

  return (
    <>
      {loading && <CLoading loading={loading} />}
      <Container
        bottomSpace
        edges={["left", "right"]}
        headerProps={headerProps}
        showPattern={true}
      >
        {!item?.search && <><View style={{justifyContent:'center', alignItems:'center',marginVertical:20}}>
         <CInput placeholder='Search' onChangeText={(e)=>{setCountrySlug(e)}} onPress={()=>{handleApi()}}/>
        </View>
        <View style={{marginHorizontal:20}}>
          <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>
          {countrySlug ? countrySlug : item.title == 'Country' ?  'United states' : item.title == 'State' ? 'Alaska' :item.title == 'Professions' && 'modeling' }
          </Text>
        </View></>}

        <CList
          style={Styles.ContestList}
          contentContainerStyle={[GlobalStyle.list, { marginBottom: 35, }]}
          data={data}
          numColumns={2}
          loading={reduxState.loading}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: "Store not found",
          }}
          onRefreshLoading={reduxState.loading}
          onRefreshHandler={() => onRefreshHandler()}
          // onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          maxToRenderPerBatch={10}
          windowSize={10}
        />
      </Container>
    </>
  )
}

export default ContestType

