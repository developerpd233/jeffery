import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../uiComponents";
import { View  , Image, TouchableOpacity, Dimensions} from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from './Setting.Styles'
import {CCard} from '../../../uiComponents'
import { About, Account, Dots, Help, Payment, Privacy, Profile, ProfileIcon, Send, userIcon } from "../../../assets";
import { FlatList } from "react-native-gesture-handler";
import { themes } from "../../../theme/colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
const ContestUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const headerProps = {
     headerTitle: `Settings`,
     
      showCart: false,

  };
  const reduxState = useSelector(({ auth, root }) => {
      return {
          loading: root?.categoryLoading,
          data: [
          {value:"Account" , icon:Account} ,  {value: 'About' , icon:About} ,{value:"Privacy and policy" , icon:Privacy} ,{value:"Help and support" , icon:Help}, {value:"Payment" , icon:Payment}
              
            
           
          ],

          profileData :[



          ]
      };
  });






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
    
    <View style={Styles.Container}>
             <View style={Styles.ImageView}>
                <Image source={userIcon} resizeMode='stretch' style={Styles.userImage} />
                <View style={{ marginLeft: 10 }}>
                    <CText style={Styles.userNam}>User</CText>
                    <CText style={Styles.userEmail}>User@mail.com</CText>
                </View>
            </View>
            <View style={Styles.list}>
                {reduxState.data.map((e)=>(
                        <View style={{marginVertical:15, flexDirection:'row', alignItems:'center', justifyContent:'space-between' , marginHorizontal:10, borderBottomWidth:0.5, borderBottomColor:'rgba(255, 255, 255, 0.3)' , paddingBottom:10  }}>
                            <Image source={e.icon}  style={{width:25, height:25}} resizeMode="contain"/>
                            <CText style={[Styles.userEmail ,{flex:1 , paddingLeft:15 , fontSize:16}]}>{e.value}</CText>
                            <AntDesign name="right" size={20} color='rgba(255, 255, 255, 0.5)' />
                        </View>
                ))}
            </View>
    </View>
       

       
     

    </Container>
  )
}

export default ContestUser

