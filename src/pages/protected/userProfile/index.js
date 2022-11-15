import React, {useState , useEffect} from "react";
import { Container } from "../../../containers";
import { View  , Text , Image, FlatList} from "react-native";
import  Styles  from "./Profile.Style";
import { CList, CInput, CListItem, CText, CButton, CLoading } from "../../../uiComponents";
import ApiSauce from "../../../services/networkRequest"
import {GET_PROFILE} from "../../../config/webservices"
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
      // setData(response)
      data.push([response])
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
           <Image source={'a'} style={Styles.userImage} />
        </View>

        {/* {data?.map((val)=>{
          return(
            <View style={Styles.textView}>
          <Text style={Styles.key}>{val} :</Text>
          <Text numberOfLines={1} style={Styles.value}>hello</Text>
        </View>
          )
        })} */}
        {/* <FlatList 
        data={data}
        renderItem={({item})=>{
          return(
        <View style={Styles.textView}>
          <Text style={Styles.key}>Name :</Text>
          <Text numberOfLines={1} style={Styles.value}>hello</Text>
        </View>
          )
        }}
        /> */}

      </View>
    </Container>
  )
}

export default ContestUser

