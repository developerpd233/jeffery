import React, { useEffect, useState } from "react";
import { Container, CountriesModal } from "../../../containers";
import { CLoading, ProgressiveImage } from "../../../uiComponents";
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

function UserInformation({ route }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [phoneError, setPhoneError] = useState(" ");



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
        dispatch(getLocalCountries())
    },[])

    const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
    const [professionModalIsOpen, updateProfessionModalIsOpen] = useState(false);

    const [selectedCountry, updateSelectedCountry] = useState(
        reduxState.currentCountry
    );

    const toggleCountryModal = () => {
        updateCountryModalIsOpen(!countryModalIsOpen);
    };

    const toggleProfeesionalModal = () => {
        updateProfessionModalIsOpen(!professionModalIsOpen);
    };



    const countryOnSelect = (item) => {
        updateSelectedCountry(item);
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

                phoneErr={phoneError}
                handlePick={()=> handlePick()}
                onLoginPress={() => navigation.navigate("login")}
            />

            {/* <Modal
                transparent={true}
                visible={countryModalIsOpen}
                onRequestClose={() => toggleCountryModal()}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={reduxState.data}
                            onSelect={(val) => countryOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal> */} 
            <Modal
                transparent={true}
                visible={professionModalIsOpen}
                onRequestClose={() => updateProfessionModalIsOpen()}
            >
                <View style={AuthStyle.modalContainer}>
                    <View style={AuthStyle.modalInnerContainer}>
                        <CountriesModal
                        data={reduxState.data}
                            // onSelect={(val) => countryOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal>
        </Container>
    );
}
export default UserInformation;
