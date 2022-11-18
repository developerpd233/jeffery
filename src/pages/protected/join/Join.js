import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton, CLoading,  } from "../../../uiComponents";
import { TouchableOpacity, View  , Image} from "react-native";
import Styles from "./Join.styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ApiSauce from "../../../utils/network";
import {  JOIN_PARTICIPATE } from "../../../config/webservices"
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { showTowst } from "../../../utils/utilFunctions";

import CForm from './Form'
import { TOKEN } from "../../../utils/asyncStorage/Constants";
const Join = (props) => {
  const { item, } = props?.route?.params || {}
  console.log("🚀 ~ file: Join.js ~ line 21 ~ Join ~ item", item)

    const dispatch = useDispatch();
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [details, setDetails] = useState()
    const [video, setVideo] = useState()
    const [Loading, setLoading] = useState(false)
    const [imageOne, setImageOne] = useState(false)
    const [imgaeTwo, setImageTwo] = useState(false)
    const [imageThree, setImageThree] = useState(false)
    const [imageFour, setImageFour] = useState(false)



    const navigation = useNavigation();

    const headerProps = {
        headerTitle: `Join The Contest`,
     
      showCart: false,

    };


    const reduxState = useSelector(({ auth, root }) => {
        return {
            loading: root?.categoryLoading,
            data: [
              
                {
                    // // image: require("../../../assets/images/flowers/two.png"),
                    label: "Monthly Contest",
                },
                {
                    // // image: require("../../../assets/images/flowers/three.png"),
                    label: "Yearly  Contest",
                },
                {
                    // // image: require("../../../assets/images/flowers/four.png"),
                    label: "Video Contest",
                },
               
              

            ],
            user:auth.user
        };
    });

    

   

    const handlePick =async ()=>{
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          launchImageLibrary(options, (res) => {
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
            //   alert(res.customButton);
            } else {
              const source = { uri: res.uri };
              console.log('response', JSON.stringify(res?.assets?.[0]));
              setImageOne(res?.assets?.[0])
            
            }
          });
      
    }
    const handlePickFour =async ()=>{
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          launchImageLibrary(options, (res) => {
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
            //   alert(res.customButton);
            } else {
              const source = { uri: res.uri };
              console.log('response', JSON.stringify(res?.assets?.[0]));
              setImageFour(res?.assets?.[0])
            
            }
          });
      
    }
    const handlePickTwo =async ()=>{
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          launchImageLibrary(options, (res) => {
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
            //   alert(res.customButton);
            } else {
              const source = { uri: res.uri };
              console.log('response', JSON.stringify(res?.assets?.[0]));
              setImageTwo(res?.assets?.[0])
            
            }
          });
      
    }
    const handlePickThree =async ()=>{
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          launchImageLibrary(options, (res) => {
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
            //   alert(res.customButton);
            } else {
              const source = { uri: res.uri };
              console.log('response', JSON.stringify(res?.assets?.[0]));
              setImageThree(res?.assets?.[0])
            
            }
          });
      
    }
    const submit = async (values) => {
      console.log("🚀 ~ file: Join.js ~ line 171 ~ submit ~ values", values)
      setLoading(true)
        const formData = new FormData()

        
        formData.append('image', {
            name:'name',
            type:"name/jpg",
            uri:"https://localwp.com/wp-content/uploads/2021/08/local-sharing.png"
          })
          formData.append('name', "aaaa")
          formData.append('detail', "aaaa")
          formData.append('description', "aaaa")
          formData.append('contest_id', item?.id)
          formData.append('images[]', {
            name:'name',
            type:'name/jpg',
            uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          })
          formData.append('images[]', {
            name:'name',
            type:'name/jpg',
            uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          })
          formData.append('images[]', {
            name:'name',
            type:'name/jpg',
            uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          })
          try {
          const res =  await ApiSauce.postWithToken(JOIN_PARTICIPATE ,  formData, reduxState?.user?.token)
            console.log("🚀 ~ file: Join.js ~ line 204 ~ submit ~ res", res)
            showTowst('success', 'Join Contest' ,res.message)
            navigation.goBack()
          } catch (error) {
            showTowst('false', 'Join Contest' ,error.message)

            console.log("🚀 ~ file: Join.js ~ line 206 ~ submit ~ error", error)
            
          } finally{
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
            <ScrollView>

            {Loading && <CLoading  loading={Loading}/>}

            <View style={Styles.container}>
              
                <CText style={Styles.text}>
                  Follow The Instruction To Join The Contest
                </CText>
                <CForm
                submit={submit}
                imageOne={imageOne}
                imgaeTwo={imgaeTwo}
                imageThree={imageThree}
                imageFour={imageFour}
                handlePick={handlePick}
                handlePickTwo={handlePickTwo}
                handlePickThree={handlePickThree}
                handlePickFour={handlePickFour}


                // resendOtp={resendOtp}
                // loading={reduxState?.loading}
                />
                
              

            </View>
         
            
           
           
           </ScrollView>
            
        </Container>
    )
}

export default Join

