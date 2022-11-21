import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton, CLoading } from "../../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation ,useIsFocused } from "@react-navigation/native";
import Styles from '../Contest.Style'
import { CCard } from '../../../../uiComponents'
import { SINGLE_CONTEST , ADD_FAVOURITIES , REMOVE_FAVOURITIES } from "../../../../config/webservices"
import ApiSauce from "../../../../services/networkRequest"
const ContestTypeDetail = (props) => {

  const { item, index , contestType } = props?.route?.params || {}
  console.log("🚀 ~ file: ContestTypeDetail.js ~ line 15 ~ ContestTypeDetail ~ item", item)
  const [heart, setHeart] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused()
  const headerProps = {
    headerTitle: "Monthly Contests",
    subtitle: "Explore all contests",
    showCart: false,
    showCenterInput: true,
    placeholder: 'Search Participant....'
  };

  const reduxState = useSelector(({ auth, root }) => {
    return {
      loading: root?.categoryLoading,
      data: [
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
        {
          image: require("../../../../assets/images/flowers/one.png"),
          title: "Monthly Contest",
          orderNumber: 'FROM SEP 02 TO OCT 31',
          prize: 'To Win $11.86 USD, 9 Contestants'
        },
      ],
      user:auth?.user
    };
  });

  const select = (val) => {
    navigation.navigate("ContestUser", {
      item: val,
      contestType:contestType
    });
  };

  const renderItem = ({ item, index }) => {
    console.log("🚀 ~ file: ContestTypeDetail.js ~ line 83 ~ renderItem ~ item", item)
    return (
      <CCard 
      onPress={() => select(item)}
      Profile={item?.image}
      Positon={item?.position}
      Votes={item?.votes_count}
      userProfile={item?.user?.image }
      profileName={item?.name}
      heart={item?.favourite}
      FavouriteOnPress={()=>{handleFav(item?.id , item?.favourite)}}
      />
      
    );
  };
  const onRefreshHandler = () => {
    // handleCategory();
  };


  useEffect(() => {
    handleApi()
  }, [isFocused])

const token = reduxState.user
  const handleApi = async () => {
    try {
      setLoading(true)
      const data = await ApiSauce.getWithToken(SINGLE_CONTEST(item?.id) , reduxState?.user?.token)
      setData(data.data)
    } catch (err) {
      console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    } finally {
      setLoading(false)
    }
  }

  const handleFav =async (id ,favourite) => {
    try {
      setLoading(true)
      if(favourite == false ){
        const data = await ApiSauce.getWithToken(ADD_FAVOURITIES(id) , reduxState?.user?.token)
      }
      else{
        const data = await ApiSauce.getWithToken(REMOVE_FAVOURITIES(id) , reduxState?.user?.token)
      }
    } catch (err) {
      console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    } finally {
      handleApi()
      setLoading(false)
    }
  }

  return (
    <Container
      bottomSpace
      edges={["left", "right"]}
      headerProps={headerProps}
      showPattern={true}

    >
      {loading && <CLoading loading={loading} />}
      <CText style={Styles.normalTitle}>
        Contest {index}
      </CText>
      <CButton onPress={()=> props.navigation.navigate('Join' ,{item})} title='Join the Contest' buttonStyle={Styles.buttonStyle2} />

      <CList
        style={Styles.ContestList}
        contentContainerStyle={[GlobalStyle.list, {
          marginBottom: 35,
          alignSelf: 'center',
        }]}
        data={data?.participants}
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

