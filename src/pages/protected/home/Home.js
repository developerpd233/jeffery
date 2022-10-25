import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import Styles from "./Home.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AuthStyle from "../../auth/Auth.style";
const Home = () => {
  const dispatch = useDispatch();
 

  const navigation = useNavigation();

  const headerProps = {
      headerTitle: "Store",
      showCart: false,
      headerLeft:true,
    headerRight:true,
    showCenterInput:true,
    placeholder:'Search Participant....'

  };

  const reduxState = useSelector(({ auth, root }) => {
      console.log("🚀 ~ file: Store.js ~ line 25 ~ reduxState ~ root", root);
      return {
          loading: root?.categoryLoading,
          data: [
              {
                  // image: require("../../../assets/images/flowers/one.png"),
                  title: "Boys Monthly Contest",
                  prize:"$ 0.43"
              },
              {
                  // // image: require("../../../assets/images/flowers/two.png"),
                  title: "Boys Monthly Contest",
                  prize:"$ 0.43"
              },
              {
                  // // image: require("../../../assets/images/flowers/three.png"),
                  title: "Boys Monthly Contest",
                  prize:"$ 0.43"
              },
              {
                  // // image: require("../../../assets/images/flowers/four.png"),
                  title: "Boys Monthly Contest",
                  prize:"$ 0.43"
              },
              {
                  // // image: require("../../../assets/images/flowers/five.png"),
                  title: "Boys Monthly Contest",
                  prize:"$ 0.43"
              },
              {
                  // // image: require("../../../assets/images/flowers/six.png"),
                  title: "Boys Monthly Contest",
                  prize:"$ 0.43"
              },
              {
                  // // image: require("../../../assets/images/flowers/five.png"),
                  title: "Boys Monthly Contest",
                  prize:"$ 0.43"
              },
              {
                  // image: require("../../../assets/images/flowers/six.png"),
                  title: "Boys Monthly Contest",
                     prize:"$ 0.43"
              },
          ],
      };
  });
  const renderItem = ({ item, index }) => {
    return (
        <CListItem
            title={item?.title}
            titleStyles={Styles.title}
            price={item?.prize}
            priceStyle={Styles.price}
            onPress={() => select(item)}
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
<View style={Styles.container}>
        <CText style={Styles.normalTitle}>
            Are You One In A <CText style={Styles.normalSubTitle}>
            Million?   
             
        </CText>
             
        </CText>
        <CText style={Styles.text}>
        Are You Beautiful And Sexy And
        You Know It ?
        </CText>

        <CButton  title='Join the Contest' />

        </View>

    <CList
        style={Styles.list}
        numColumns={2}
        contentContainerStyle={[GlobalStyle.list, { marginBottom: 35 }]}
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
        // onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        maxToRenderPerBatch={10}
        windowSize={10}
    />
</Container>
  )
}

export default Home

