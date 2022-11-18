import React, { useRef, memo } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { View } from "react-native";
import { CButton, CheckBox, CInput, CText } from "../../../uiComponents";
import AuthStyle from "../Auth.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../../assets/icons/CustomIcon";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function CForm(props) {
    const {
        submit,
        loading,
        selectedCountry,
        toggleCountryModal,
        phoneErr,
        onCreatePress,
        onGooglePress,
        onPressSubLabel
    } = props;

    const form = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    return (
        <Formik
            innerRef={form}
            onSubmit={(values) => submit(values)}
            initialValues={{
                email:"",
                password:""
            }}
            validationSchema={Validations(selectedCountry)}
        >
            {({ handleChange, values, handleSubmit, errors }) => {
                console.log('objectobjectobject', errors , values)
                return (
                    <View>
                        <View style={AuthStyle.card}>
                            <View style={AuthStyle.cardHeader}>
                                <CText style={AuthStyle.cardHeaderTitle}>
                                   Login
                                </CText>
                                {/* <CText style={AuthStyle.cardHeaderSubTitle}>
                                    Sign In with phone number
                                </CText> */}
                            </View>

                            <View style={AuthStyle.cardBody}>
                            <CInput
                                    ref={email}
                                    inputLabel={"Email"}
                                    placeholder={"Your email"}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    error={errors.email}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        password.current.focus()
                                    }
                                />
                                <CInput
                                    ref={password}
                                    inputLabel={"Password"}
                                    placeholder={"Enter Password"}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    secureTextEntry={true}
                                    onPressSubLabel={onPressSubLabel}
                                    inputSubLabel='Forget Password?'
                                    lableandSubLabelStyle={AuthStyle.lableandSubLabelStyle}

                                    error={errors.password}
                                    returnKeyType="done"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <View style={{marginTop:-25}}>
                                <CheckBox   title="Remember Me"/>

                                </View>

                                <CButton
                                    title={"Sign In"}
                                    loading={loading}
                                    buttonText={AuthStyle.buttonStyle}
                                    onPress={() => handleSubmit()}
                                />
                                <CText style={AuthStyle.cardBottomText}>
                                {" "}
                                Or Sign In With
                            </CText>
                            <View style={AuthStyle.iconView}>
                                {/* <View style={AuthStyle.bottomButton}>
                                    <EvilIcons name="sc-facebook"  size={22} style={AuthStyle.Icon} />

                                </View> */}
                                <TouchableOpacity style={AuthStyle.bottomButton} onPress={onGooglePress}>
                                    <FontAwesome name="google"  size={17} style={AuthStyle.Icon} />
                                </TouchableOpacity>
                            </View>
                            </View>
                            <TouchableOpacity onPress={onCreatePress}>
                            <CText style={AuthStyle.cardBottomText}>
                                {" "}
                                Create An Account ?
                            </CText>
                            </TouchableOpacity>
                            

                           
                        </View>
                       

                     

                       
                       
                    </View>
                );
            }}
        </Formik>
    );
}
export default memo(CForm);
