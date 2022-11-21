import React, {useState} from "react";
import { Container } from "../../../containers";
import { useSelector, useDispatch } from "react-redux";
import AuthStyle from "../Auth.style";
import CForm from "./Form";
import events from "../../../utils/events";
import { useNavigation } from "@react-navigation/native";
import { sendOtp, verifyOtp } from "../../../store/actions/Auth.action";
import ApiSauce from "../../../services/networkRequest"
import {FORGOT_PASS, VERIFY_EMAIL} from "../../../config/webservices"
import { CLoading, ProgressiveImage  } from "../../../uiComponents";
import { View } from "react-native";
import { showTowst } from "../../../utils/utilFunctions";

function Forget({ route}) {
    const { phone } = route?.params || {};
    const { email } = route?.params || {};
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
        const payload ={
            email: values.email
        }
        setLoading(true)

        try{
            const responce = await ApiSauce.post(FORGOT_PASS , payload)
            showTowst('success' , 'Forgot Pass' , responce.message)

            console.log("🚀 ~ file: Forget.js ~ line 38 ~ submit ~ responce", responce)

            navigation.navigate('otp_verification' , {email:values.email , changePass:true})
          }catch(err){
            showTowst('error' , 'Forgot Pass' , err.error)
          console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
          }finally{
            setLoading(false)
          }
    };

    const resendOtp = () => {
        events.emit("restartOTPTimer", {});
    };

    const headerProps = {
        showCenterLogo: false,
        // headerRight: true,
        transparent: true,
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
                resendOtp={resendOtp}
                loading={reduxState?.loading}
            />


                </View>
            
        </Container>
    );
}
export default Forget;
