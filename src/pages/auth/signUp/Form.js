import React, { useRef, memo } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { View } from "react-native";
import { CButton, CInput, CText } from "../../../uiComponents";
import AuthStyle from "../Auth.style";

function CForm(props) {
    const { submit, loading, selectedCountry, toggleCountryModal } = props;

    const form = useRef(null);
    const userName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const displayNmae = useRef(null);


    return (
        <Formik
            innerRef={form}
            onSubmit={(values) => submit(values)}
            initialValues={{
                phone: "",
                password: "",
            }}
            validationSchema={Validations(selectedCountry)}
        >
            {({ handleChange, values, handleSubmit, errors }) => {
               
                return (
                    <View>
                        <View style={AuthStyle.card}>
                            <View style={AuthStyle.cardHeader}>
                                <CText style={AuthStyle.cardHeaderTitle}>
                                Register
                                </CText>
                                <CText style={AuthStyle.cardHeaderSubTitle}>
                                Account Details
                                </CText>
                            </View>

                            
                            <View style={AuthStyle.cardBody}>
                                <CInput
                                    ref={userName}
                                    inputLabel={"Full Name"}
                                    placeholder={"User name"}
                                    value={values.name}
                                    onChangeText={handleChange("name")}
                                    error={errors.name}
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
                                        password.current.focus()
                                    }
                                  
                                />

                                <CInput
                                    ref={password}
                                    inputLabel={"Password"}
                                    placeholder={"password"}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    secureTextEntry={true}
                                    error={errors.password}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        displayNmae.current.focus()
                                    }
                                />
                                 <CInput
                                    ref={displayNmae}
                                    inputLabel={"Display Name"}
                                    placeholder={"Display Name"}
                                    value={values.displayNmae}
                                    onChangeText={handleChange("displayNmae")}
                                    error={errors.displayNmae}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />

                                

                              
                            </View>

                            <CButton
                                title={"Next"}
                                loading={loading}
                                onPress={() => handleSubmit()}
                            />
                        </View>
                    </View>
                );
            }}
        </Formik>
    );
}
export default memo(CForm);
