
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from '../../../containers'
import { ProgressiveImage } from '../../../uiComponents'
import AuthStyle from "../Auth.style";
import CForm from "./Form";
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions/Auth.action';
import ApiSause from '../../../utils/network'
import { LOGIN } from '../../../config/webservices';
const SignIn = (props) => {
const dispatch = useDispatch()

        const submit = async (values) => {
            user_login(values)
            // dispatch(login())
        };
        const user_login =async (values) =>{
            try {
                     const loginRes =await ApiSause.post(LOGIN ,values)
                
            } catch (error) {
                console.log("🚀 ~ file: SignIn.js ~ line 26 ~ SignIn ~ error", error)
                
            }
        }



  return (
    <View>
       
    <Container
            backgroundColor={"theme-color"}
            showPattern={true}
            scrollView={true}
            loading={false}
            scrollViewProps={{
                contentContainerStyle: AuthStyle.container,
            }}
        >
            <View style={AuthStyle.header}>
                <ProgressiveImage
                    style={AuthStyle.headerLogo}
                    source={require("../../../assets/images/logo.png")}
                />
                <CForm
                submit={submit}
                loading={false}
                onCreatePress={()=> props.navigation.navigate('sign_up')}
            />
            
 
            </View>
            </Container>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})
