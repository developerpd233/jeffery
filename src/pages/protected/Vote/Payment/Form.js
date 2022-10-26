import React, { useRef, memo } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { View } from "react-native";
import { CButton, CInput, CText } from "../../../../uiComponents";
import VoteStyle from "../Vote.Styles";

function CForm(props) {
    const { submit, loading, selectedCountry, toggleCountryModal } = props;

    const form = useRef(null);
    const amount = useRef(null);
    const cardNo = useRef(null);
    const expDate = useRef(null);
    const cvv = useRef(null);
    const fname = useRef(null);
    const lname = useRef(null);
    const company = useRef(null);
    const address = useRef(null);
    const city = useRef(null);
    const state = useRef(null);
    const zipCode = useRef(null);
    const country = useRef(null);




    return (
        <Formik
            innerRef={form}
            onSubmit={(values) => submit(values)}
            initialValues={{
                amount: "",
                cardNo: "",
                expDate: "",
                cvv: "",
                city: "",
                state: "",
                fname: "",
                lname: "",
                company: "",
                address: "",
                city: "",
                state: "",
                zipCode: "",
                country:""


            }}
            validationSchema={Validations(selectedCountry)}
        >
            {({ handleChange, values, handleSubmit, errors }) => {
               console.log("🚀 ~ file: Form.js ~ line 53 ~ CForm ~ errors", errors)
               
                return (
                    <View>
                        <View style={VoteStyle.card}>
                            <View style={VoteStyle.cardHeader}>
                                <CText style={VoteStyle.cardHeaderTitle}>
                                Authorize.net
                                </CText>
                               
                            </View>

                            
                            <View style={VoteStyle.cardBody}>
                                <CInput
                                    ref={amount}
                                    inputLabel={"Amount"}
                                    placeholder={"1"}
                                    value={values.amount}
                                    onChangeText={handleChange("amount")}
                                    error={errors.amount}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        email.current.focus()
                                    }
                                />
                                  <CInput
                                    ref={cardNo}
                                    inputLabel={"Card Number"}
                                    placeholder={"5420002155558888"}
                                    value={values.cardNo}
                                    onChangeText={handleChange("cardNo")}
                                    error={errors.cardNo}
                                    sec
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        password.current.focus()
                                    }
                                  
                                />

                                <CInput
                                    ref={expDate}
                                    inputLabel={"Expiration Date"}
                                    placeholder={"12/25"}
                                    value={values.expDate}
                                    onChangeText={handleChange("expDate")}
                                    secureTextEntry={true}
                                    error={errors.expDate}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        displayNmae.current.focus()
                                    }
                                />
                                 <CInput
                                    ref={cvv}
                                    inputLabel={"CVV"}
                                    placeholder={"999"}
                                    value={values.cvv}
                                    onChangeText={handleChange("cvv")}
                                    error={errors.cvv}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                 
                                <CInput
                                    ref={city}
                                    type="number"
                                    // disabled={true}
                                    onRightPress={()=> toggleCountryModal()}
                                    // selectedCountry={selectedCountry}
                                    onPress={() => toggleCountryModal()}
                                    inputLabel={"City"}
                                    error={false}
                                    placeholder={"-- Select City --"}
                                    rightIconName='down'
                                    editable={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />

                                
                                <CText style={[VoteStyle.cardHeaderTitle , { marginVertical:20 }]}>
                                Authorize.net
                                </CText>
                              
                                <CInput
                                    ref={fname}
                                    inputLabel={"First Name (Ellen)"}
                                    placeholder={"Ellen"}
                                    value={values.fname}
                                    onChangeText={handleChange("fname")}
                                    error={errors.fname}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={lname}
                                    inputLabel={"Last Name (Johnson)"}
                                    placeholder={"Johnson"}
                                    value={values.lname}
                                    onChangeText={handleChange("lname")}
                                    error={errors.displayNmae}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                     <CInput
                                    ref={company}
                                    inputLabel={"Company (Souveniropolis)"}
                                    placeholder={"Souvinearpolis"}
                                    value={values.company}
                                    onChangeText={handleChange("company")}
                                    error={errors.company}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                      <CInput
                                    ref={address}
                                    inputLabel={"Address (14 Main Street)"}
                                    placeholder={"14 main street"}
                                    value={values.address}
                                    onChangeText={handleChange("address")}
                                    error={errors.address}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                   <CInput
                                    ref={city}
                                    inputLabel={"City (Pecan Springs)"}
                                    placeholder={"pecan springs"}
                                    value={values.city}
                                    onChangeText={handleChange("city")}
                                    error={errors.city}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                  <CInput
                                    ref={state}
                                    inputLabel={"State (TX)"}
                                    placeholder={"TX"}
                                    value={values.state}
                                    onChangeText={handleChange("state")}
                                    error={errors.state}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                  <CInput
                                    ref={zipCode}
                                    inputLabel={"ZIP Code (44628)"}
                                    placeholder={"44628"}
                                    value={values.zipCode}
                                    onChangeText={handleChange("zipCode")}
                                    error={errors.zipCode}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                  <CInput
                                    ref={country}
                                    inputLabel={"Country (US)"}
                                    placeholder={"US"}
                                    value={values.country}
                                    onChangeText={handleChange("country")}
                                    error={errors.country}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                 

                            </View>

                            <CButton
                                title={"Register"}
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
