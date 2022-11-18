import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View, TouchableOpacity , Image} from 'react-native';
import {CButton, CInput, CText, CountDownTimer} from '../../../uiComponents';
import AuthStyle from './Join.styles';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import {themes} from "../../../theme/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from "./Join.styles";

function CForm(props) {
    const {submit, loading, resendOtp, imageOne , imgaeTwo, imageThree, imageFour , handlePick ,handlePickTwo , handlePickThree, handlePickFour} = props;

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
                        <View style={{marginTop:0,flexDirection:'row' , justifyContent:'space-between', marginLeft:-8 , marginBottom:20}}>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Featured Image</CText>
                    <TouchableOpacity onPress={handlePick} style={Styles.imgView}>
                    {imageOne?.uri ?  <Image source={imageOne}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Image</CText>

                    <TouchableOpacity onPress={handlePickTwo} style={Styles.imgView} >
                    {imgaeTwo?.uri ?  <Image source={imgaeTwo}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Image</CText>
                    <TouchableOpacity onPress={handlePickThree} style={Styles.imgView}>
                    {imageThree?.uri ?  <Image source={imageThree}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
                    <View style={{alignItems:'center'}}>
                    <CText style={Styles.imageText}>Image</CText>
                    <TouchableOpacity onPress={handlePickFour} style={Styles.imgView}>
                    {imageFour?.uri ?  <Image source={imageFour}  resizeMode="cover" style={{width:70 , height:70}} /> :      <Ionicons size={50} name='add-circle-outline' color="#2c9dd1" />}    
                    </TouchableOpacity>

                    </View>
               
               
                </View>
                <CButton
                                    title={"Join Contest"}
                                    buttonText={AuthStyle.buttonStyle}
                                    onPress={()=>handleSubmit()}
                                />
                    </View>
                );
            }}
        </Formik>
    );
}
export default memo(CForm);
