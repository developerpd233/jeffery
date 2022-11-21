import React, {useState} from "react";
import { Container } from "../../../containers";
import { useSelector, useDispatch } from "react-redux";
import AuthStyle from "../Auth.style";
import CForm from "./form";
import events from "../../../utils/events";
import { useNavigation } from "@react-navigation/native";
import { sendOtp, verifyOtp } from "../../../store/actions/Auth.action";
import ApiSauce from "../../../services/networkRequest"
import {FORGOT_PASS, CHNAGE_PASSWORD} from "../../../config/webservices"
import { CLoading, ProgressiveImage  } from "../../../uiComponents";
import { View } from "react-native";
import { showTowst } from "../../../utils/utilFunctions";

function changePass({ route}) {
    const { phone } = route?.params || {};
    const { email } = route?.params || {};
    const { responce } = route?.params || {};
    console.log("🚀 ~ file: changePass.js ~ line 18 ~ changePassword ~ responce", responce?.token)
    const dispatch = useDispatch();
    const [userEmail , setUserEmail] = useState(email)
    const [loading , setLoading] = useState(false)
    const navigation = useNavigation();

    const reduxState = useSelector(({ auth, global }) => {
        return {
            loading: auth?.verifyOtpLoading,
        };
    });

    const submit =async (values) => {
        const formData = new FormData()
        formData.append('password' , values.password),
        formData.append('password_confirmation' , values.conformPassword ),
        formData.append('token' , responce?.token )
        if(values.password === values.conformPassword){
            try{
                setLoading(true)
                const responce = await ApiSauce.post(CHNAGE_PASSWORD , formData)
            showTowst('success', 'Change Password' , responce.message)

                console.log("🚀 ~ file: changePass.js ~ line 38 ~ submit ~ responce", responce)
                navigation.navigate('sign_in')
              }catch(err){
                showTowst('error', 'Change Password' , err,)
              console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
              }finally{
                setLoading(false)
              }
        } else {
            showTowst('error', 'Change Password' , 'Please check password')

        }
      
    }

    const resendOtp = () => {
        events.emit("restartOTPTimer", {});
    };

    const headerProps = {
        showCenterLogo: false,
        // headerRight: true,
        transparent: true,
        headerTitle:'Change Password'
    };

    return (
        <Container
            headerProps={headerProps}
            backgroundColor={"theme-color"}
            showPattern={true}
            scrollView={true}
            loading={reduxState?.loading}
            scrollViewProps={{
                contentContainerStyle: AuthStyle.container,
            }}
        >
            {loading && <CLoading  loading={loading}/>}
            <View style={AuthStyle.header}>
                    <ProgressiveImage
                        style={AuthStyle.headerLogo}
                        source={require("../../../assets/images/logo.png")}
                    />
                   <CForm
                submit={submit}
                // resendOtp={resendOtp}
                loading={reduxState?.loading}
            />


                </View>
            
        </Container>
    );
}
export default changePass;
