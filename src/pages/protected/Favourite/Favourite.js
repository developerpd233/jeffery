import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from './Favourite.Style'
import {CCard} from '../../../uiComponents'
import { Red_heart } from "../../../assets";
const ContestTypeDetail = (props) => {

  const {item , index} = props?.route?.params || {}
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const headerProps = {
      headerTitle: "Favourites",
      subtitle :"Explore all contests",
      showCart: false,

  };

  const reduxState = useSelector(({ auth, root }) => {
      console.log("🚀 ~ file: Store.js ~ line 25 ~ reduxState ~ root", root);
      return {
          loading: root?.categoryLoading,
          data: [
              {
                  image: require("../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
              },
              {
                image: require("../../../assets/images/flowers/one.png"),
                title: "Monthly Contest",
                orderNumber:'FROM SEP 02 TO OCT 31',
                prize:'To Win $11.86 USD, 9 Contestants'
              },
              {
                image: require("../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
            },
            {
                image: require("../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
            },
            {
                image: require("../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
            },
            
          ],
      };
  });

  const select = () => {
    console.log('itemitemitemitemitemitemitemitemitemitem', item)
    
};

  const renderItem = ({ item, index }) => {
    return (
        <CCard icon={Red_heart}  mainContainer={index ===  reduxState?.data?.length -1    ? Styles.mainContainer : {}} onPress={()=> select(item)} />
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


    <CList
    style={Styles.list}
    numColumns={2}
    contentContainerStyle={[GlobalStyle.list, { marginBottom: 15 }]}
    data={reduxState.data}
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

