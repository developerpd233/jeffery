import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text } from "react-native"
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton, CLoading } from "../../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from '../Contest.Style'
import { GET_CONTEST, IMAGE_URL } from "../../../../config/webservices"
import ApiSauce from "../../../../services/networkRequest"
const ContestType = (props) => {
  const { item } = props?.route?.params || {}
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  const headerProps = {
    headerTitle: `${item.title}`,
    subtitle: "Explore all contests",
    showCart: false,
  };

  useEffect(() => {
    handleApi()
  }, [])


  const handleApi = async () => {
    try {
      setLoading(true)
      const data = await ApiSauce.getWithoutToken(GET_CONTEST(
        item.title == 'Monthly Contest' ?
        'monthly' : item.title == 'Yearly Contest' ?
        'yearly' : 'video'
        ))
      setData(data.data)
    } catch (err) {
      console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    } finally {
      setLoading(false)
    }
  }

  const reduxState = useSelector(({ auth, root }) => {
    console.log("🚀 ~ file: Store.js ~ line 25 ~ reduxState ~ root", root);
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

  const select = (index) => {
    navigation.navigate("ContestTypeDetails", {
      index,
      item
    });
  };

  const renderItem = ({ item, index }) => {
    console.log("🚀 ~ file: ContestType.js ~ line 106 ~ renderItem ~ item", IMAGE_URL+item?.image)
    return (
      <CListItem
        title={`Contest ${index + 1}`}
        price={item.amount}
        subTitle={item?.orderNumber}
        image={IMAGE_URL + item?.image}
        titleStyles={Styles.title}
        priceStyle={Styles.price}
        subTitleStyles={Styles.subTitleStyles}
        listItemView={Styles.listItemView}
        onPress={() => select(index)}
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

