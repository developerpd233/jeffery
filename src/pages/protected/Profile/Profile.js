import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../uiComponents";
import { View  , Image, TouchableOpacity, Dimensions} from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from './Profile.Style'
import {CCard} from '../../../uiComponents'
import { Dots, Profile, ProfileIcon, Send } from "../../../assets";
import { FlatList } from "react-native-gesture-handler";
import { themes } from "../../../theme/colors";
const ContestUser = (props) => {
    console.log("🚀 ~ file: Profile.js ~ line 14 ~ ContestUser ~ props", props)
    // const { user } = props?.route?.params
    // console.log("🚀 ~ file: SubmitVote.js ~ line 11 ~ SubmitVote ~ user", user)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showProfile , setShowProfile] = useState(true)
  const headerProps = {
      showCart: false,
      headerRightText:    showProfile ? "Pose 2 Post" :'Information'
  };
  const reduxState = useSelector(({ auth, root }) => {
      return {
          loading: root?.categoryLoading,
          data: [
          ],
          profileData :[
          ]
      };
  });

  const select = (item) => {
    navigation.navigate("Contest_Type", {
        item,
    });
};

  const renderItem = ({ item, index }) => {
    return (
        <Image source={ProfileIcon}  style={Styles.ProfileIcon}/>
    );
}; 
const renderImageItem = ({ item, index }) => {
    return (
        <View style={Styles.imgView}>

            <Image source={Profile}  style={Styles.Profile}/>
        </View>
    );
};
const onRefreshHandler = () => {
  // handleCategory();
};

const renderCommentSection = (item , index) =>(
    <View style={[Styles.commentView, {borderBottomColor: 1, 
    }]}>
    <View style={{flexDirection:'row' , alignItems:'center' ,  }}>
        <Image source={ProfileIcon}  style={Styles.commentProfile}/>
        
        <View style={{width:Dimensions.get('window').width*0.57 , height:50 , justifyContent:'center'  , }}>
                <CText style={Styles.commentText}>Lorem Ipsum is simply text . . . . . .  </CText>
    </View>
    <Image source={Dots}  style={[Styles.commentProfile ,{height:15}]} resizeMode='contain' />
        
     </View>

   
</View>
)



const renderProfile  = () =>(
    <View style={{marginVertical:10}}>
       {reduxState.profileData?.map((item)=>{
        return(
            <View style={{flexDirection:'row' , justifyContent:'space-between' , marginHorizontal:15}}>

                <CText style={Styles.ProfileText}>
                    {item.key}
                </CText>
                <CText style={Styles.ProfileText}>
                {item.value}

                </CText>
                </View>
        )
       })}
    </View>
)

  return (
    <Container
    bottomSpace={true}
    edges={["left", "right"]}
    headerProps={headerProps}
    showPattern={true}
    scrollView={true}
>
    <View style={{marginHorizontal:18,}}>

        <CCard mainContainer={Styles.cardmainContainer} />
    </View>

        <View style={Styles.ProfileSection}>
            <View style={Styles.selected}>

        <CText style={Styles.listHeaderText}>Profile </CText>
            </View>
            <View>
             <CText style={[Styles.listHeaderText , { color:'rgba(255,255,255,0.5)'}]}>Contest </CText>
            </View>

        </View>

        <View style={Styles.ListHeaderComponentStyle}>

            <CText style={Styles.listHeaderText}>Recent Voters <CText style={Styles.listVotes}>(07) </CText></CText>
        </View>
 
        <View style={Styles.imgView}>

            <Image source={Profile}  style={Styles.Profile}/>
            <CText style={[Styles.listHeaderText ,{marginTop:10,fontSize:13,    paddingLeft:10, textAlign:'center'}]}>Texas / United States</CText>

        </View>  
        
    
        <View style={Styles.ListHeaderComponentStyle}>
            <CText style={Styles.listHeaderText}>Photos <CText style={Styles.listVotes}>(07) </CText></CText>
        </View>
                <CText style={[Styles.noPhote ,{marginBottom:80}]}>No Photos Yet</CText>
       
       
      
     

    </Container>
  )
}

export default ContestUser

