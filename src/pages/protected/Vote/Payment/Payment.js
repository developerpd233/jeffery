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
import { showTowst } from "../../../../utils/utilFunctions";
import { PART_VOTE } from "../../../../config/webservices";
function Signup(props) {
    const { user  , amount} = props?.route?.params || {}

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
            user:auth?.user
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
        setIsLoading(true)
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
                             cardNumber: values?.cardNo,
                                expirationDate: values?.expDate,
                                cardCode: values?.cvv
                            }
                        },
                        poNumber: "456654",
                        customer: {
                            id: "99999456654"
                        },
                        billTo: {
                            firstName: values.fname,
                            lastName: values.lname,
                            company: values?.company,
                            address: values?.address,
                            city: values?.city,
                            state : values?.state,
                            zip:  values?.zipCode,
                            country: values?.country
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
       if (res.messages.resultCode == "Error") {
            showTowst('error' ,'Payment ' ,res.messages?.message?.[0].text)

       } else {
       console.log("🚀 ~ file: Payment.js ~ line 130 ~ submit ~ res", res)

        const payload ={
            participant_id:user,
            amount:amount,
            order_id:res.transactionResponse.transId,
            method:res.transactionResponse.accountType,
            message:res.messages?.message?.[0].text
        }
        try {
            const payRes =  await ApiSauce.postWithToken(PART_VOTE, payload ,reduxState?.user?.token  )
            showTowst('success', 'payment' , payRes?.message)
            navigation.navigate('Contest', {
                screen: 'Contest',
                initial: false
            })
            console.log("🚀 ~ file: Payment.js ~ line 147 ~ submit ~ payRes", payRes)
            
        } catch (error) {
            showTowst('error', 'payment' , 'SomeThing went wrong')

            
        } finally{
            setIsLoading(false)

        }


       }
            // alert(res.messages.message[0].text)
            
            // alert(res?.transactionResponse?.errors?.[0]?.errorText)
            
        } catch (error) {
            console.log("🚀 ~ file: Payment.js ~ line 127 ~ submit ~ error", error)
            
        }
        finally{
            setIsLoading(false)
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
                totalAmount={amount}
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
