import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from '../Contest.Style'
import {CCard} from '../../../../uiComponents'
const ContestTypeDetail = (props) => {

  const {item , index} = props?.route?.params || {}
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const headerProps = {
      headerTitle: "Monthly Contests",
      subtitle :"Explore all contests",
      showCart: false,
    showCenterInput:true,
    placeholder:'Search Participant....'

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
         
          
            
          ],
      };
  });

  const select = () => {
    console.log('itemitemitemitemitemitemitemitemitemitem', item)
    navigation.navigate("ContestUser", {
        item:props.route.params.item,
    });
};

  const renderItem = ({ item, index }) => {
    return (
        <CCard  onPress={()=> select(item)} />
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
<CText style={Styles.normalTitle}>
Contest {index}
</CText>
<CButton title='Join the Contest' buttonStyle={Styles.buttonStyle2} />

    <CList
        style={Styles.ContestList}
        contentContainerStyle={[GlobalStyle.list, { marginBottom: 35 , 
          alignSelf:'center',
        }]}
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

export default ContestTypeDetail

