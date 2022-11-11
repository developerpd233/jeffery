import React, { useRef, memo } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { View } from "react-native";
import { CButton, CInput, CText } from "../../../uiComponents";
import AuthStyle from "../Auth.style";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";

function CForm(props) {
    const {
        submit,
        loading,
        toggleCountryModal,
        selectedCountry,
        phoneErr,
        toggleProfeesionalModal,
        handlePick,
        imagepic,
        selectedState,
        toggleStateModal,
        selectedCity,
        toggleCityModal,
        countryErr,
        stateErr,
        cityErr,
        selectedProfeesion,
        slectedProfessionErr
    } = props;

    const form = useRef(null);
    const fullName = useRef(null);
    const address = useRef(null);
    const country = useRef(null);
    const state = useRef(null);
    const city = useRef(null);
    const bio = useRef(null);
    const fbProfile = useRef(null);
    const linkedInProfile = useRef(null);
    const twitterProfile = useRef(null);
    const instaProfile = useRef(null);
    const profession = useRef(null);
    const image = useRef(null);

    return (
        <Formik
            innerRef={form}
            onSubmit={(values) =>submit(values)}
            initialValues={{}}
            validationSchema={Validations}
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
                                    Profile Details
                                </CText>
                            </View>

                            <View style={AuthStyle.cardBody}>
                                <CInput
                                    ref={fullName}
                                    inputLabel={"Fully legal Name"}
                                    placeholder={"Legal name"}
                                    value={values.name}
                                    onChangeText={handleChange("name")}
                                    error={errors.name}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        address.current.focus()
                                    }
                                />


                                <CInput
                                    ref={address}
                                    inputLabel={"Address"}
                                    placeholder={"Your address"}
                                    value={values.address}
                                    onChangeText={handleChange("address")}
                                    // secureTextEntry={true}
                                    error={errors.address}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        bio.current.focus()
                                    }
                                />



                                <CInput
                                    ref={country}
                                    type="number"
                                    // disabled={true}
                                    onRightPress={() => toggleCountryModal()}
                                    selectedCountry={selectedCountry}
                                    onPress={() => toggleCountryModal()}
                                    inputLabel={"Country"}
                                    placeholder={"-- Select country --"}
                                    value={selectedCountry?.name}
                                    error={countryErr}
                                    rightIconName='down'
                                    editable={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={state}
                                    type="number"
                                    // disabled={true}
                                    onRightPress={() => toggleStateModal()}
                                    selectedCountry={selectedState}
                                    onPress={() => toggleStateModal()}
                                    inputLabel={"State"}
                                    placeholder={"-- Select State --"}
                                    value={selectedState?.name}
                                    rightIconName='down'
                                    editable={false}
                                    error={stateErr}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={city}
                                    type="number"
                                    // disabled={true}
                                    onRightPress={() => toggleCityModal()}
                                    selectedCountry={selectedCity}
                                    onPress={() => toggleCityModal()}
                                    inputLabel={"City"}
                                    placeholder={"-- Select City --"}
                                    value={selectedCity?.name}
                                    rightIconName='down'
                                    editable={false}
                                    error={cityErr}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={bio}
                                    multiline={true}
                                    numberOfLines={4}
                                    inputInnerContainerStyle={AuthStyle.inputInnerContainerStyle}
                                    inputLabel={"Bio"}
                                    placeholder={"Enter your details"}
                                    value={values.bio}
                                    onChangeText={handleChange("bio")}
                                    secureTextEntry={true}
                                    error={errors.bio}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        fbProfile.current.focus()
                                    }
                                />

                                <CInput
                                    ref={fbProfile}
                                    inputLabel={"Facebook Profile Page"}
                                    placeholder={"Link here..."}
                                    value={values.fbProfile}
                                    onChangeText={handleChange("fbProfile")}
                                    error={errors.fbProfile}
                                    sec
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={linkedInProfile}
                                    inputLabel={"Linkedin Profile Page"}
                                    placeholder={"Link here..."}
                                    value={values.linkedInProfile}
                                    onChangeText={handleChange("linkedInProfile")}
                                    error={errors.linkedInProfile}
                                    sec
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={twitterProfile}
                                    inputLabel={"Twitter Profile Page"}
                                    placeholder={"Link here..."}
                                    value={values.twitterProfile}
                                    onChangeText={handleChange("twitterProfile")}
                                    error={errors.twitterProfile}
                                    sec
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={instaProfile}
                                    inputLabel={"Instagram Profile Page"}
                                    placeholder={"Link here..."}
                                    value={values.instaProfile}
                                    onChangeText={handleChange("instaProfile")}
                                    error={errors.instaProfile}
                                    sec
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CInput
                                    ref={profession}
                                    type="number"
                                    // disabled={true}
                                    onRightPress={() => toggleProfeesionalModal()}
                                    // selectedCountry={selectedCountry}
                                    onPress={() => toggleProfeesionalModal()}
                                    inputLabel={"Profession"}
                                    error={slectedProfessionErr}
                                    placeholder={"-- Select Profession --"}
                                    value={selectedProfeesion?.name}
                                    rightIconName='down'
                                    editable={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => handleSubmit()}
                                />
                                <CText style={GlobalStyle.inputLabel}>
                                    Image
                                </CText>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, height: 45, marginTop: 5 }}>
                                    <CButton
                                        title={"Choose File"}
                                        buttonStyle={AuthStyle.filebuttonStyle}
                                        loading={loading}
                                        onPress={handlePick}
                                        buttonText={AuthStyle.filebuttonText}
                                    />
                                    <CText style={AuthStyle.fileChooseText}>
                                        {imagepic ? imagepic?.[0]?.name : 'No file chosen'}
                                    </CText>
                                </View>
                            </View>

                            <CButton
                                title={"Submit"}
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
