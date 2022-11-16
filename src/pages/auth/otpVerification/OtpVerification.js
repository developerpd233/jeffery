import React, {useState} from "react";
import { Container } from "../../../containers";
import { useSelector, useDispatch } from "react-redux";
import AuthStyle from "../Auth.style";
import CForm from "./Form";
import events from "../../../utils/events";
import { useNavigation } from "@react-navigation/native";
import { sendOtp, verifyOtp } from "../../../store/actions/Auth.action";
import ApiSauce from "../../../services/networkRequest"
import {VERIFY_EMAIL} from "../../../config/webservices"
import { CLoading, ProgressiveImage  } from "../../../uiComponents";

function OtpVerification({ route}) {
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
        formData.append('otp_number' , values.otp)
        formData.append('email' , userEmail)
        try{
            setLoading(true)
            const responce = await ApiSauce.post(VERIFY_EMAIL , formData)
            props.navigation.navigate('sign_in')
          }catch(err){
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
        headerRight: true,
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
            <CForm
                submit={submit}
                resendOtp={resendOtp}
                loading={reduxState?.loading}
            />
        </Container>
    );
}
export default OtpVerification;
