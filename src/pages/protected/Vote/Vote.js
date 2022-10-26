import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton, CCard } from "../../../uiComponents";
import { View , Image } from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import Styles    from "./Vote.Styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Send } from "../../../assets";
const Vote = (props) => {
  const dispatch = useDispatch();
 

  const navigation = useNavigation();

  const headerProps = {
      
      showCart: false,
      headerRightText: 'Vote' ,
      onRightPress:()=>navigation.navigate('SubmitVote'),

    

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
            <CText style={Styles.desc} >Please Ensure The Accuracy Of Your Email Adress As We Are Providing The Winning Partcipantsa Notice. That Could Be You. Voters Must Be In Numbers Only. Do Not Include Decimals O Commas When Entering Your Vote Amount Example Placing A Vote For $1,000.00 Should Be Typed As 1000 Warning: Due To Browser Delays Amd Potential High Volumes Of Voting Activity It Is Not A Advised To Wait Too Long T Place A Vote For Your Favourite Photo.</CText>
        </View>
        <View style={Styles.VotingViews}>
            <View style={Styles.voteList}>
                 <CText style={Styles.voteText}>Minimum</CText>
                 <CText style={Styles.voteText}>$1</CText>

            </View>
            <View style={[Styles.voteList ,{borderBottomWidth:0}]}>
                <View  style={[Styles.voteList ,{borderBottomWidth:0.5 , flex:1,}]} > 
                 <CText style={Styles.voteText}>Maximum</CText>
                 </View>
                 <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
                 <CText style={Styles.voteText}>$</CText>
                       <CInput inputInnerContainerStyle={Styles.inputInnerContainerStyle}  placeholderTextColor ='white'    placeholder='2' />
                       <View style={Styles.USD}>
                         <CText style={[Styles.usdText]}>USD</CText>

                       </View>
                 </View>
            </View>
            <View style={Styles.voteList}>
                 <CText style={Styles.voteText}>City, State Or Territory</CText>
                 <CText style={Styles.voteText}>ceder lake, indaiana</CText>
            </View>
            <View style={Styles.voteList}>
                 <CText style={Styles.voteText}>Country</CText>
                 <CText style={Styles.voteText}>United States</CText>
            </View>

        </View>
            <CButton  title='Submit' buttonStyle={[Styles.buttonStyle , {  marginHorizontal:20 ,         marginBottom:90        }]}/>   
       
</Container>

)
}
export default Vote

