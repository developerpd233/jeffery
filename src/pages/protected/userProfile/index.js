import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../uiComponents";
import { View  , Text , Image, TouchableOpacity, Dimensions} from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from './Profile.Style'
import {CCard} from '../../../uiComponents'
import { Dots, Profile, ProfileIcon, Send } from "../../../assets";
import { FlatList } from "react-native-gesture-handler";
import { themes } from "../../../theme/colors";
import { styles } from "../../Home/styles";

const ContestUser = () => {

  const headerProps = {
      showCart: false,
      headerRightText:"Profile"
  };
  return (
    <Container
    bottomSpace={true}
    edges={["left", "right"]}
    headerProps={headerProps}
    showPattern={true}
    scrollView={true}>

      <View style={styles.mainView}>
        <View style={styles.imageView}>
           <Image source={'a'} style={styles.userImage} />
        </View>
        <View style={styles.textView}>
          <Text>
            Name
          </Text>
          <Text>
            hello
          </Text>
        </View>
      </View>
    </Container>
  )
}

export default ContestUser

