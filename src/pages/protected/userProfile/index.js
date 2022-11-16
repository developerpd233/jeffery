import React, {useState , useEffect} from "react";
import { Container } from "../../../containers";
import { View  , Text , Image, FlatList} from "react-native";
import  Styles  from "./Profile.Style";
import { CList, CInput, CListItem, CText, CButton, CLoading } from "../../../uiComponents";
import ApiSauce from "../../../services/networkRequest"
import {GET_PROFILE , IMAGE_URL} from "../../../config/webservices"
import { object } from "yup";
const ContestUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  console.log("🚀 ~ file: index.js ~ line 12 ~ ContestUser ~ data", data)

  useEffect(() => {
    handleApi()
  }, [])


  const handleApi = async () => {
    try {
      setIsLoading(true)
      const response = await ApiSauce.getWithToken(GET_PROFILE)
      setData(response.data)
    } catch (err) {
      console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    } finally {
      setIsLoading(false)
    }
  }
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
      {isLoading && <CLoading loading={isLoading}/>}

      <View style={Styles.mainView}>
        <View style={Styles.imageView}>
           <Image source={data?.image ? {uri :IMAGE_URL + data?.image} : {uri : IMAGE_URL + data?.avatar}} style={Styles.userImage} />
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Name :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.display_name}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Email :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.email}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Address :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.address}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Date_of_birth :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.date_of_birth}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Facebook :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.facebook}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Instagram :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.instagram}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Linkedin :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.linkedin}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Twitter :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.twitter}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>Country :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.country_id}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>City :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.city_id}</Text>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.key}>State :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.state_id}</Text>
        </View>

        {/* <View style={Styles.textView}>
          <Text style={Styles.key}>Name :</Text>
          <Text numberOfLines={1} style={Styles.value}>{data?.display_name}</Text>
        </View> */}
      </View>
    </Container>
  )
}

export default ContestUser

