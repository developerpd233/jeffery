import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View, TouchableOpacity} from 'react-native';
import {CButton, CInput, CText, CountDownTimer} from '../../../uiComponents';
import AuthStyle from './Join.styles';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import {themes} from "../../../theme/colors";

function CForm(props) {
    const {submit, loading, resendOtp} = props;

    const form = useRef(null);
    const username = useRef(null);
    const email = useRef(null);
    const des = useRef(null);






    return (
        <Formik
            innerRef={form}
            onSubmit={(values) => submit(values)}
            initialValues={{
                email: ''
            }}
            validationSchema={Validations}
        >
            {({handleChange, values, handleSubmit, errors, setFieldValue}) => {
                return (
                    <View>
                        <View style={[AuthStyle.card,{ marginTop: 20}]}>
                            <View style={[AuthStyle.cardHeader]}>
                                <CText style={[AuthStyle.cardHeaderTitle,{marginBottom:15,}]}>
                                    Register
                                </CText>
                               
                                
                            </View>

                            <View style={AuthStyle.cardBody}>

                                <View style={AuthStyle.otpContainer}>
                                <CInput
                                    ref={username}
                                    inputLabel={"User Name"}
                                    placeholder={"User Name"}
                                    value={values.userName}
                                    onChangeText={handleChange("userName")}
                                    error={errors.userName}
                                    sec
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        email.current.focus()
                                    }
                                    
                                  
                                />
                                <CInput
                                    ref={email}
                                    inputLabel={"Email"}
                                    placeholder={"Your email"}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    error={errors.email}
                                    sec
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        des.current.focus()
                                    }
                                    
                                  
                                />
                                  <CInput
                                    ref={des}
                                    inputLabel={"Description"}
                                    placeholder={"Description"}
                                    value={values.description}
                                    multiline={true}
                                    numberOfLines={10}
                                    inputInnerContainerStyle={AuthStyle.inputInnerContainerStyle}

                                    onChangeText={handleChange("description")}
                                    error={errors.description}
                                    sec
                                    returnKeyType="next"
                                    
                                  
                                />
                                </View>


                                
                            </View>

                        </View>

                    </View>
                );
            }}
        </Formik>
    );
}
export default memo(CForm);
