import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from '../Contest.Style'
const ContestType = (props) => {
  // console.log("🚀 ~ file: ContestType.js ~ line 10 ~ ContestType ~ props", props.route.params)
  const {item} = props?.route?.params || {}
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const headerProps = {
      headerTitle: `${item.title}`,
      subtitle :"Explore all contests",
      showCart: false,
  };

  const reduxState = useSelector(({ auth, root }) => {
      console.log("🚀 ~ file: Store.js ~ line 25 ~ reduxState ~ root", root);
      return {
          loading: root?.categoryLoading,
          data: [
              {
                  image: require("../../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
              },
              {
                image: require("../../../../assets/images/flowers/one.png"),
                title: "Monthly Contest",
                orderNumber:'FROM SEP 02 TO OCT 31',
                prize:'To Win $11.86 USD, 9 Contestants'
              },
              {
                image: require("../../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
            },
            {
                image: require("../../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
            },
            {
              image: require("../../../../assets/images/flowers/one.png"),
                title: "Monthly Contest",
                orderNumber:'FROM SEP 02 TO OCT 31',
                prize:'To Win $11.86 USD, 9 Contestants'
          },
          {
            image: require("../../../../assets/images/flowers/one.png"),
              title: "Monthly Contest",
              orderNumber:'FROM SEP 02 TO OCT 31',
              prize:'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
            title: "Monthly Contest",
            orderNumber:'FROM SEP 02 TO OCT 31',
            prize:'To Win $11.86 USD, 9 Contestants'
      },
            
          ],
      };
  });

  const select = (index) => {
    console.log("🚀 ~ file: ContestType.js ~ line 58 ~ select ~ index", index)
    navigation.navigate("ContestTypeDetails", {
        index,
        item
    });
};

  const renderItem = ({ item, index }) => {
    return (
        <CListItem
        title={`Contest ${index}`}
        price={item.prize}
        subTitle={item.orderNumber}
        image={item?.image}
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
    <Container
    bottomSpace
    edges={["left", "right"]}
    headerProps={headerProps}
    showPattern={true}
    
>


    <CList
        style={Styles.ContestList}
        contentContainerStyle={[GlobalStyle.list, { marginBottom: 35 ,  }]}
        data={reduxState.data}
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
  )
}

export default ContestType

