import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './validations';
import {View, TouchableOpacity} from 'react-native';
import {CButton, CInput, CText, CountDownTimer} from '../../../uiComponents';
import AuthStyle from '../Auth.style';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import {themes} from "../../../theme/colors";

function CForm(props) {
    const {submit, loading, resendOtp} = props;

    const form = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const conformPassword = useRef(null);




    return (
        <Formik
            innerRef={form}
            onSubmit={(values) => submit(values)}
            initialValues={{
                email: '',
                password:'',
                conformPassword:''
            }}
            validationSchema={Validations}
        >
            {({handleChange, values, handleSubmit, errors, setFieldValue}) => {
                return (
                    <View>
                        <View style={[AuthStyle.card,{ marginTop: 20}]}>

                            <View style={AuthStyle.cardBody}>

                                <View style={AuthStyle.otpContainer}>
                                <CInput
                                    ref={password}
                                    inputLabel={"Password"}
                                    placeholder={"new password"}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    error={errors.password}
                                    secureTextEntry={true}
                                    returnKeyType="next"
                                />
                                 <CInput
                                    ref={conformPassword}
                                    inputLabel={"conform Password"}
                                    placeholder={"conform Password "}
                                    value={values.conformPassword}
                                    onChangeText={handleChange("conformPassword")}
                                    error={errors.conformPassword}
                                    secureTextEntry={true}
                                    returnKeyType="next"
                                />
                                </View>
                                


                                {/* <CountDownTimer text={'Request a new code in'} initialValue={5}>
                                    <View style={AuthStyle.linkButtonContainer}>
                                        <CText style={AuthStyle.linkButtonText}>Don’t receive OTP code</CText>
                                        <TouchableOpacity style={AuthStyle.linkButtonWithIcon} onPress={resendOtp}>
                                            <CText style={AuthStyle.linkButtonOtherText}>Resend</CText>
                                        </TouchableOpacity>
                                    </View>
                                </CountDownTimer> */}

                                <CButton title={'Continue'}
                                         loading={loading}
                                         onPress={() => handleSubmit()}/>
                            </View>

                        </View>

                    </View>
                );
            }}
        </Formik>
    );
}
export default memo(CForm);
