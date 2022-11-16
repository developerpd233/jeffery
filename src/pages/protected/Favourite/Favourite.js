import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton, CLoading } from "../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from './Favourite.Style'
import { CCard } from '../../../uiComponents'
import { Red_heart } from "../../../assets";
import ApiSauce from "../../../services/networkRequest"
import { FAVOURITIES } from "../../../config/webservices"

const ContestTypeDetail = (props) => {

  const { item, index } = props?.route?.params || {}
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  console.log("🚀 ~ file: Favourite.js ~ line 19 ~ ContestTypeDetail ~ data", data)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const headerProps = {
    headerTitle: "Favourites",
    subtitle: "Explore all contests",
    showCart: false,

  };

  const reduxState = useSelector(({ auth, root }) => {
    return {
      loading: root?.categoryLoading,
      data: [
        {
          image: require("../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },

      ],
      user:auth?.user
    };
  });

  useEffect(() => {
    handleApi()
  }, [])


  const handleApi = async () => {
    try {
      setIsLoading(true)
      const data = await ApiSauce.getWithToken(FAVOURITIES , reduxState?.user?.token)
      setData(data.data)
    } catch (err) {
      console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    } finally {
      setIsLoading(false)
    }
  }


  console.log("🚀 ~ file: Favourite.js ~ line 85 ~ reduxState ~ reduxState", reduxState?.user?.token)

  const select = () => {
    console.log('itemitemitemitemitemitemitemitemitemitem', item)

  };

  const renderItem = ({ item, index }) => {
    console.log("🚀 ~ file: Favourite.js ~ line 93 ~ renderItem ~ item", item)
    return (
      <CCard
        icon={Red_heart}
        mainContainer={index === reduxState?.data?.length - 1 ? Styles.mainContainer : {}}
        onPress={() => select(item)}
        Profile={item?.image}
        profileName={item?.name}
        Positon={item?.position}
        Votes={item?.votes_count}
        ProfileIcon={item?.user?.avatar}
      />
    );
  };
  const onRefreshHandler = () => {
    // handleCategory();
  };

  return (
    <Container
      bottomSpace
      edges={["left", "right"]}
      headerProps={headerProps}
      showPattern={true}
    >
      {isLoading && <CLoading loading={isLoading} />}
      <CList
        style={Styles.list}
        numColumns={2}
        contentContainerStyle={[GlobalStyle.list, { marginBottom: 15 }]}
        data={data}
        loading={reduxState.loading}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        emptyOptions={{
          // icon: require('../../assets/images/empty.png'),
          text: "Store not found",
        }}
        onRefreshLoading={reduxState.loading}
        onRefreshHandler={() => onRefreshHandler()}
        onEndReachedThreshold={0.1}
        maxToRenderPerBatch={10}
        windowSize={10}

      />
    </Container>
  )
}

export default ContestTypeDetail

