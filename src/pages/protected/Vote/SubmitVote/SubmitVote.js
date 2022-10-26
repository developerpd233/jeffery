import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton, CCard } from "../../../../uiComponents";
import { View , Image } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import Styles    from "../Vote.Styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const SubmitVote = (props) => {
  const dispatch = useDispatch();
 

  const navigation = useNavigation();

  const headerProps = {
      
      showCart: false,
      headerRightText: 'Vote Submit' ,
     

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
    bottomSpace={true}
    edges={["left", "right"]}
    headerProps={headerProps}
    showPattern={true}
    scrollView={true}
    
>


        <CCard mainContainer={Styles.cardmainContainer} />
        <View style={Styles.userDesc} >
            <CText style={Styles.confirmVote} >Confirm Your Vote</CText>
        </View>
        <View style={[Styles.PrizeView , {marginVertical:10, padding:7 , marginBottom:0}]}>
              <CText style={Styles.voteAmount}>YOU VOTED AMOUNT </CText>
                <CText style={Styles.voteAmount}>$1</CText>
        </View>

        <View style={{marginVertical:20,marginHorizontal:25,justifyContent:'center' , alignSelf:'center' , marginBottom:90 }} >
              <CText style={Styles.winText}>*All Winning Votes Are Considered A Commitment As Per Rules</CText>
              <CText  style={Styles.winText}>* Voting Rules Will Not Allow You To Withdraw Your Votes</CText>
              <CText  style={Styles.winText}>* Review Through Terms And Conditions Before Placing Your Vote</CText>
              <CButton onPress={()=> navigation.navigate('Profile') }  title='Submit' buttonStyle={[Styles.buttonStyle , {  marginHorizontal:20 ,     }]}/>   

        </View>

       
</Container>

)
}
export default SubmitVote

