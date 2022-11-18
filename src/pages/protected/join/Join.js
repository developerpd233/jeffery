import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton, CLoading,  } from "../../../uiComponents";
import { TouchableOpacity, View  , Image} from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import Styles from "./Join.styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AuthStyle from "../../auth/Auth.style";
import ApiSauce from "../../../utils/network";
import { HOME_CONTEST } from "../../../config/webservices"
import { ScrollView } from "react-native-gesture-handler";
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import CForm from './Form'
const Join = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState()
    const [month, setMonth] = useState()
    const [annaul, setAnnaul] = useState()
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
        };
    });
    const renderItem = ({ item, index }) => {
        return (
            <CListItem
                title={`${item?.title} Monthly Contest`}
                titleStyles={Styles.title}
                price={item?.amount}
                priceStyle={Styles.price}
                onPress={() => props.navigation.openDrawer()}
            />
        );
    };

    const renderItemOne = ({ item, index }) => {
        return (
            <CListItem
                title={`${item?.title}`}
                titleStyles={Styles.title}
                price={item?.amount}
                priceStyle={Styles.price}
                onPress={() => props.navigation.openDrawer()}
            />
        );
    };

    const onRefreshHandler = () => {
        // handleCategory();
    };

    useEffect(() => {
        handleContest()
    }, [])

    const handleContest = async () => {
        try {
            setLoading(true)
            const data = await ApiSauce.getWithoutToken(HOME_CONTEST)
            setData(data.data)
            setMonth(data.data.monthly_contests)
            setAnnaul([data.data.annual_contest , data.data.video_contest ])

        } catch (err) {
            console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        } finally {
            setLoading(false)
        }
    }

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

    return (
        <Container
            bottomSpace
            edges={["left", "right"]}
            headerProps={headerProps}
            showPattern={true}

        >
            <ScrollView>

            {/* {Loading && <CLoading />} */}

            <View style={Styles.container}>
              
                <CText style={Styles.text}>
                  Follow The Instruction To Join The Contest
                </CText>
                <CForm
                // submit={submit}
                // resendOtp={resendOtp}
                // loading={reduxState?.loading}
                />
                
                <View style={{marginTop:0,flexDirection:'row' , justifyContent:'space-between', marginLeft:-8 , marginBottom:20}}>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Featured Image</CText>
                    <TouchableOpacity onPress={handlePick} style={Styles.imgView}>
                    {imageOne?.uri ?  <Image source={imageOne}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Image</CText>

                    <TouchableOpacity onPress={handlePickTwo} style={Styles.imgView} >
                    {imgaeTwo?.uri ?  <Image source={imgaeTwo}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Image</CText>
                    <TouchableOpacity onPress={handlePickThree} style={Styles.imgView}>
                    {imageThree?.uri ?  <Image source={imageThree}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Image</CText>
                    <TouchableOpacity onPress={handlePickFour} style={Styles.imgView}>
                    {imageFour?.uri ?  <Image source={imageFour}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
               
               
                </View>
                <CButton
                                    title={"Join Contest"}
                                    buttonText={AuthStyle.buttonStyle}
                                    onPress={() => handleSubmit()}
                                />

            </View>
         
            
           
           
           </ScrollView>
            
        </Container>
    )
}

export default Join

