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
import {COUNTRY , SIGN_UP ,STATE , CITY , PROFESSION} from "../../../config/webservices"

function UserInformation(props) {
const preValue = props?.route?.params?.values

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [phoneError, setPhoneError] = useState(" ");
    const [loading , setLoading] = useState(false)

    const [Country , setCountry] = useState()
    const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
    const [selectedCountry, updateSelectedCountry] = useState();
    const [selectedCountryErr, updateSelectedCountryErr] = useState();

    const [state , setState] = useState()
    const [stateModal , setStateModal] = useState(false)
    const [slectedState , setSlectedState] = useState()
    const [slectedStateErr , setSlectedStateErr] = useState()

    const [city , setCity] = useState()
    const [cityModal , setCityModal] = useState(false)
    const [slectedCity , setSlectedCity] = useState()
    const [slectedCityErr , setSlectedCityErr] = useState()

    const [profession , setProfession] = useState()
    const [ProfessionModal , setProfessionModal] = useState(false)
    const [slectedProfession , setSlectedProfession] = useState()
    const [slectedProfessionErr , setSlectedProfessionErr] = useState()
    
    const [image , setImage] = useState()
    const [signUpValues, setSignUpValues] = useState(preValue);


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
        handleCountryApi()
        handleProfessionApi()
      },[])
     
      const SignUp = async (val) => {
        const formData = new FormData() 
        formData.append('name',signUpValues?.name)
        formData.append('display_name',signUpValues?.displayNmae)
        formData.append('lastname',val?.name)
        formData.append('email','a'+signUpValues?.email)
        formData.append('password',signUpValues?.password)
        formData.append('username',val?.name)
        // formData.append('image',image)
        formData.append('country_id',selectedCountry?.id)
        formData.append('state_id',slectedState?.id)
        formData.append('city_id',slectedCity.id)
        formData.append('date_of_birth',"1999-10-21")
        formData.append('bio',val?.bio)
        formData.append('facebook',val?.fbProfile)
        formData.append('twitter',val?.twitterProfile)
        formData.append('linkedin',val?.linkedInProfile)
        formData.append('instagram',val?.instaProfile)
        formData.append('profession',slectedProfession.id)
        formData.append('address',val?.address)
        try{
          setLoading(true)
          const data = await ApiSauce.post(SIGN_UP , formData)
        }catch(err){
        console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        }finally{
          setLoading(false)
        }
      }
    
      const handleCountryApi = async () => {
        try{
          setLoading(true)
          const data = await ApiSauce.getWithoutToken(COUNTRY)
          setCountry(data.data)
        }catch(err){
        console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    
        }finally{
          setLoading(false)
        }
      }
      const handleState = async (item) => {
        try{
          setLoading(true)
          const data = await ApiSauce.getWithoutToken(STATE(item.id))
          setState(data.data)
        }catch(err){
        console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        }finally{
          setLoading(false)
        }
      }

      const handleCity = async (item) => {
        try{
          setLoading(true)
          const data = await ApiSauce.getWithoutToken(CITY(item.id))
          setCity(data.data)
        }catch(err){
        console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        }finally{
          setLoading(false)
        }
      }

      const handleProfessionApi = async () => {
        try{
          setLoading(true)
          const data = await ApiSauce.getWithoutToken(PROFESSION)
          setProfession(data.data)
        }catch(err){
        console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
    
        }finally{
          setLoading(false)
        }
      }

    const toggleCountryModal = () => {
        updateCountryModalIsOpen(!countryModalIsOpen);
        updateSelectedCountryErr()
    };

    const toggleStateModal = () =>{
        setStateModal(!stateModal);
        setSlectedStateErr()
    }
    const toggleCityModal =() => {
        setCityModal(!cityModal)
        setSlectedCityErr()
    }

    const toggleProfeesionalModal = () => {
        setProfessionModal(!ProfessionModal);
        setSlectedProfessionErr()
    };

    const countryOnSelect = (item) => {
        updateSelectedCountry(item);
        toggleCountryModal();
        handleState(item)
    };

    const stateOnSelect = (item) => {
        setStateModal(false);
        setSlectedState(item)
        handleCity(item)
    };

    const stateOnCity = (item) => {
        setCityModal(false)
        setSlectedCity(item)
    }

    const professionSelect = (item) => {
        setProfessionModal(false)
        setSlectedProfession(item)
    }

    const handlePick =async ()=>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            });
            setImage(res)
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
              
            }
          }
    }

   
    const submit = (values) => {
        if(!selectedCountry){
            updateSelectedCountryErr('please select country')
        }
        else if(!slectedState){
            setSlectedStateErr('please select state')
        }
        else if(!slectedCity){
            setSlectedCityErr('please select city')
        }
        else if(!slectedProfessionErr){
            setSlectedProfessionErr('plese select profession')
        }
        else{
            SignUp(values)
        }
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
                selectedState={slectedState}
                toggleStateModal={toggleStateModal}
                selectedCity={slectedCity}
                toggleCityModal={toggleCityModal}
                toggleProfeesionalModal={toggleProfeesionalModal}
                selectedProfeesion={slectedProfession}
                imagepic={image}
                phoneErr={phoneError}
                handlePick={()=> handlePick()}
                onLoginPress={() => navigation.navigate("login")}
                countryErr={selectedCountryErr}
                stateErr={slectedStateErr}
                cityErr={slectedCityErr}
                professionErr={slectedProfessionErr}
            />

            <Modal
                transparent={true}
                visible={countryModalIsOpen}
                onRequestClose={() => toggleCountryModal()}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={Country}
                            onSelect={(val) => countryOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal> 
            <Modal
                transparent={true}
                visible={stateModal}
                onRequestClose={() => toggleStateModal()}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={state}
                        onSelect={(val) => stateOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal> 
            <Modal
                transparent={true}
                visible={cityModal}
                onRequestClose={() => setCityModal()}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={city}
                        onSelect={(val) => stateOnCity(val)}
                        />
                    </View>
                </View>
            </Modal>
            <Modal
                transparent={true}
                visible={ProfessionModal}
                onRequestClose={() => setProfessionModal(false)}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={profession}
                            onSelect={(val) => professionSelect(val)}
                        />
                    </View>
                </View>
            </Modal>
        </Container>
        </>
    );
}
export default UserInformation;
