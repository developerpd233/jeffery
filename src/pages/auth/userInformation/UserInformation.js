import React, { useEffect, useState } from "react";
import { Container, CountriesModal } from "../../../containers";
import { CLoading, ProgressiveImage  } from "../../../uiComponents";
import { useSelector, useDispatch } from "react-redux";
import { Modal, View } from "react-native";
import AuthStyle from "../Auth.style";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import CForm from "./Form";
import _ from "lodash";
import ApiSauce from "../../../utils/network";
import { useNavigation } from "@react-navigation/native";
import DocumentPicker, { types } from 'react-native-document-picker';
import { getLocalCountries } from "../../../store/actions/Auth.action";
import {COUNTRY , SIGN_UP ,IMAGE_URL} from "../../../config/webservices"

function UserInformation({ route , values}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [phoneError, setPhoneError] = useState(" ");

    const [loading , setLoading] = useState(false)
    const [data , setData] = useState()
    const [image , setImage] = useState()


    const reduxState = useSelector(({ auth, global }) => {
        return {
            data: global.allCountries,
            currentCountry: global.currentCountry,
            loading: auth.sendOtpLoading,
            currentCountry: global.currentCountry,
            countries: global.countries,
        };
    });

    useEffect(()=>{
    },[])

    useEffect(()=>{
        handleApi()
        SignUp()
      },[])
    
      const SignUp = async () => {
        const formData = new FormData() 
        formData.append('name','name')
        formData.append('display_name','name')
        formData.append('lastname','name')
        formData.append('email','testooooo@gmail.com')
        formData.append('password','123456789')
        formData.append('username','name')
        formData.append('image','name')
        formData.append('country_id','2')
        formData.append('state_id','name')
        formData.append('city_id','name')
        formData.append('date_of_birth','name')
        formData.append('bio','name')
        formData.append('facebook','name')
        formData.append('twitter','name')
        formData.append('linkedin','name')
        formData.append('instagram','name')
        formData.append('profession','name')
        formData.append('other_profession','name')
        try{
          setLoading(true)
          const data = await ApiSauce.post(SIGN_UP , formData)
          console.log("🚀 ~ file: UserInformation.js ~ line 69 ~ SignUp ~ data", data)
        //   setData(data.data)
        }catch(err){
        console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    
        }finally{
          setLoading(false)
        }
      }
    
      const handleApi = async () => {
        try{
          setLoading(true)
          const data = await ApiSauce.getWithoutToken(COUNTRY)
          setData(data.data)
        }catch(err){
        console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    
        }finally{
          setLoading(false)
        }
      }
    //   const handleState = async (item) => {
    //     try{
    //       setLoading(true)
    //       const data = await ApiSauce.getWithoutToken(COUNTRY)
    //       setData(data.data)
    //     }catch(err){
    //     console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    
    //     }finally{
    //       setLoading(false)
    //     }
    //   }





    const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
    const [professionModalIsOpen, updateProfessionModalIsOpen] = useState(false);

    const [selectedCountry, updateSelectedCountry] = useState(
        reduxState.currentCountry
    );

    const toggleCountryModal = () => {
        // alert('hello')
        updateCountryModalIsOpen(!countryModalIsOpen);
    };

    const toggleProfeesionalModal = () => {
        updateProfessionModalIsOpen(!professionModalIsOpen);
    };



    const countryOnSelect = (item) => {
        updateSelectedCountry(item);
        handleState(item)
        toggleCountryModal();
    };
    const handlePick =async ()=>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
              //There can me more options as well
              // DocumentPicker.types.allFiles
              // DocumentPicker.types.images
            });
            setImage(res)
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);
            //Setting the state to show single file attributes
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
              
            }
          }
    }

   
    const submit = (values) => {
        console.log("🚀 ~ file: UserInformation.js ~ line 75 ~ submit ~ values", values)
        const payload = {
            name: values?.name,
            email: values?.email,
            password: values?.password,
            c_password: values?.c_password,
            phone: phone,
        };
        console.log("values", payload);
        dispatch(signUp(payload));
    };

    return (
        <>{loading && <CLoading loading={isLoading}/>}
        <Container
            backgroundColor={"theme-color"}
            showPattern={true}
            scrollView={true}
            loading={reduxState?.loading}
            scrollViewProps={{
                contentContainerStyle: AuthStyle.container,
            }}
        >
            <View style={AuthStyle.header}>
                <ProgressiveImage
                    style={AuthStyle.headerLogo}
                    source={require("../../../assets/images/logo.png")}
                />
            </View>

            <CForm
                submit={submit}
                loading={reduxState?.loading}
                selectedCountry={selectedCountry}
                toggleCountryModal={toggleCountryModal}
                toggleProfeesionalModal={toggleProfeesionalModal}
                imagepic={image}
                phoneErr={phoneError}
                handlePick={()=> handlePick()}
                onLoginPress={() => navigation.navigate("login")}
            />

            <Modal
                transparent={true}
                visible={countryModalIsOpen}

                
                onRequestClose={() => toggleCountryModal()}
                
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={data}
                            onSelect={(val) => countryOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal> 
            <Modal
                transparent={true}
                visible={professionModalIsOpen}
                onRequestClose={() => updateProfessionModalIsOpen()}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={data}
                            // onSelect={(val) => countryOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal>
        </Container>
        </>
    );
}
export default UserInformation;
