import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import Styles    from "./Contest.Style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AuthStyle from "../../auth/Auth.style";
const Home = (props) => {
  const dispatch = useDispatch();
 

  const navigation = useNavigation();

  const headerProps = {
      headerTitle: "Contests",
      subtitle :"Types of contest",
      showCart: false,
      backOnPress: () => {
        if(props?.route?.params?.isGoBack) {
            navigation.goBack()
        } else {
            navigation.navigate('Contest', {
                screen: 'Contest',
                initial: false
            })
        }
    }

  };

  const reduxState = useSelector(({ auth, root }) => {
      console.log("🚀 ~ file: Store.js ~ line 25 ~ reduxState ~ root", root);
      return {
          loading: root?.categoryLoading,
          data: [
              {
                  // image: require("../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
              },
              {
                  // // image: require("../../../assets/images/flowers/two.png"),
                  title: "Yearly Contest",
              },
              {
                // // image: require("../../../assets/images/flowers/two.png"),
                title: "Video Contest",
            },
            
          ],
      };
  });

  const select = (item) => {
    navigation.navigate("Contest_Type", {
        item,
    });
};

  const renderItem = ({ item, index }) => {
    return (
        <CButton
            title={item?.title}
            buttonStyle={Styles.buttonStyle}
            buttonText={Styles.buttonText}
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


    <CList
        style={Styles.list}
        contentContainerStyle={[GlobalStyle.list, { marginBottom: 35 ,  }]}
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

