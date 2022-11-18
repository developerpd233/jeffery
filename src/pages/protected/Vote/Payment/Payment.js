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
import axios from 'axios'
function Signup(props) {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [phoneError, setPhoneError] = useState(" ");
    const [cardNo, setcardNo] = useState(" ");
    console.log("🚀 ~ file: Payment.js ~ line 18 ~ Signup ~ cardNo", cardNo)

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
       

    const submit = async (values) => {
        console.log("🚀 ~ file: Payment.js ~ line 62 ~ submit ~ values", values)
        const myData = {
            
                createTransactionRequest: {
                    merchantAuthentication: {
                        name: "3qPKmzB5Dg9X",
                        transactionKey: "5EeL82XS8mw4T83t"
                    },
                    refId: "1234567887654321",
                    transactionRequest: {
                        transactionType: "authCaptureTransaction",
                        amount: "200",
                        payment: {
                            creditCard: {
                             cardNumber: "4007000000027",
                                expirationDate: "09/2025",
                                cardCode: "123"
                            }
                        },
                        poNumber: "456654",
                        customer: {
                            id: "99999456654"
                        },
                        billTo: {
                            firstName: "Hello",
                            lastName: "Hell01",
                            company: "Hell02",
                            address: "Hello3",
                            city: "Hello4",
                            state : "Hello5",
                            zip: "Hello6",
                            country: "Hello7"
                        },
                        customerIP: "192.168.1.1",
                        userFields: {
                            userField: [
                                {
                                    name: "MerchantDefinedFieldName1",
                                    value: "MerchantDefinedFieldValue1"
                                },
                                {
                                    name: "favorite_color",
                                    value: "blue"
                                }
                            ]
                        },
                    processingOptions: {
                         isSubsequentAuth: "true"
                        },
                     subsequentAuthInformation: {
                        originalNetworkTransId: "123456789NNNH",
                         originalAuthAmount: "200",
                         reason: "resubmission"
                        },
                        authorizationIndicatorType: {
                        authorizationIndicator: "pre"
                      }
                   }
                }
            
        }
        try {
       const res=  await ApiSauce.post('https://api.authorize.net/xml/v1/request.api', myData )
            console.log("🚀 ~ file: Payment.js ~ line 125 ~ submit ~ res", res)
            console.log("🚀 ~ file: Payment.js ~ line 125 ~ submit ~ res", res)
            alert(res.messages.message[0].text)
            
            // alert(res?.transactionResponse?.errors?.[0]?.errorText)
            
        } catch (error) {
            console.log("🚀 ~ file: Payment.js ~ line 127 ~ submit ~ error", error)
            
        }
        // props.navigation.navigate('Profile')
        
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
                setcardNo={setcardNo}
                cardNum={cardNo}
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
