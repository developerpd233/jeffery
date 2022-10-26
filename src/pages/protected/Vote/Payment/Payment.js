import React, { useState } from "react";
import { Container, CountriesModal } from "../../../../containers";
import { CLoading, ProgressiveImage } from "../../../../uiComponents";
import { useSelector , useDispatch } from "react-redux";
import { Modal, View } from "react-native";
import VoteStyle from "../Vote.Styles";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import CForm from "./Form";
import _ from "lodash";
import ApiSauce from "../../../../utils/network";
import { useNavigation } from "@react-navigation/native";

function Signup(props) {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [phoneError, setPhoneError] = useState(" ");
    const dispatch = useDispatch()

    const reduxState = useSelector(({ auth, global }) => {
        return {
            loading: false,
            currentCountry: global.currentCountry,
            countries: global.countries,
        };
    });

    const [countryModalIsOpen, updateCountryModalIsOpen] = useState(false);
    const [selectedCountry, updateSelectedCountry] = useState(
        reduxState.currentCountry
    );
    const headerProps = {
      
        showCart: false,
        headerRightText: 'Payment ' ,
        backOnPress: () => {
          if(props?.route?.params?.isGoBack) {
              navigation.goBack()
          } else {
              navigation.navigate('Contest', {
                  screen: 'Contest',
                  initial: false
              })
          }
      }
  
    };

    const toggleCountryModal = () => {
        updateCountryModalIsOpen(!countryModalIsOpen);
    };

    const countryOnSelect = (item) => {
        updateSelectedCountry(item);
        toggleCountryModal();
    };

    const submit = (values) => {
        props.navigation.navigate('Profile')
        // alert('sbjsv')
        // setPhoneError("");
        // let perifix = `${selectedCountry?.idd?.root}${
        //     selectedCountry?.idd?.suffixes?.length > 1
        //         ? ""
        //         : selectedCountry?.idd?.suffixes[0]
        // }`;
        // let payload = _.omit(values, ["phone"]);
        // payload.phone = `${perifix.replace(
        //     /[^\w\s]/gi,
        //     ""
        // )}${values.phone.replace(/\s+/g, "")}`;
        // handleCode(payload);
        // // navigation.navigate("otp_verification");

        // console.log("payload", payload);
    };

    const handleCode = async (payload) => {

        // dispatch(login(payload))
    };

    return (
        <Container
            backgroundColor={"theme-color"}
            showPattern={true}
            scrollView={true}
    headerProps={headerProps}

            loading={reduxState?.loading || isLoading}
            scrollViewProps={{
                contentContainerStyle: VoteStyle.container,
            }}
        >
          

            <CForm
                submit={submit}
                 loading={reduxState?.loading}
                selectedCountry={selectedCountry}
                toggleCountryModal={toggleCountryModal}
                phoneErr={phoneError}
                onLoginPress={() => navigation.navigate("login")}
            />

            <Modal
                transparent={true}
                visible={countryModalIsOpen}
                onRequestClose={() => toggleCountryModal()}
            >
                <View style={VoteStyle.modalContainer}>
                    <View style={VoteStyle.modalInnerContainer}>
                        <CountriesModal
                            onSelect={(val) => countryOnSelect(val)}
                        />
                    </View>
                </View>
            </Modal>
        </Container>
    );
}
export default Signup;
