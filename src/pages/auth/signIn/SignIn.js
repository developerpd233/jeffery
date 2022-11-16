
import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Container } from '../../../containers'
import { ProgressiveImage , CLoading } from '../../../uiComponents'
import AuthStyle from "../Auth.style";
import CForm from "./Form";
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions/Auth.action';
import ApiSause from '../../../utils/network'
import { LOGIN, FB_GET_USER, SOCIAL_LOGIN } from '../../../config/webservices';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Auth from '../../../store/constants/Auth.constant'

// import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next';
const SignIn = (props) => {
    const dispatch = useDispatch()
    const [isLoading , setIsLoading] = useState(false)

    const submit = async (values) => {
        user_login(values)
    };
    const user_login = async (values) => {
        try {
            const loginRes = await ApiSause.post(LOGIN, values)
            dispatch({
                type: Auth.LOGIN_USER_API,
                        loading: false,
                        user: loginRes,
                        isLoggedIn: true,
            })
            console.log("🚀 ~ file: SignIn.js ~ line 22 ~ constuser_login= ~ loginRes", loginRes)

        } catch (error) {
            console.log("🚀 ~ file: SignIn.js ~ line 26 ~ SignIn ~ error", error)

        }
    }

    const RequestGoogleLogin = async () => {

        const configPayload = {
            scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
            webClientId: '951985103272-7c38dk8d1fon2mjn2fcfmjsqb7oehjb7.apps.googleusercontent.com',
            offlineAccess: true
        }
        GoogleSignin.configure(configPayload);

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            handleCreate("google", userInfo)
        } catch (error) {
            console.log("🚀 ~ file: index.js ~ line 144 ~ handleGoogle ~ error", error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            } else if (error.code === statusCodes.IN_PROGRESS) {

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            } else {
            }
        }
    }

    const onFBButtonPress = async () => {
        const result = await LoginManager.logInWithPermissions(['email', "public_profile"]);
        const data = await AccessToken.getCurrentAccessToken();
        const currentProfile = await Profile.getCurrentProfile();
        handleGetFbEmail(data.accessToken, currentProfile)
    };

    const handleGetFbEmail = async (accessToken, data) => {
        setIsLoading(true);
        try {
            const res = await ApiSauce.getWithoutToken(FB_GET_USER(accessToken))
            handleCreate("facebook", data, res, accessToken)
        } catch (error) {
            setIsLoading(false);
        }
    };

    const handleCreate = async (social_type, data, res, accessToken) => {
        setIsLoading(true)
        let formData = new FormData();

        if (social_type == 'google') {
            formData.append('provider', 'google')
            formData.append('provider_id', data.user.id);
            formData.append('name', data.user.name);
            formData.append('email', data.user.email);
        }
        else if (social_type == 'facebook') {
            formData.append('provider', 'facebook')
            formData.append('name', data.name);
            formData.append('provider_id', accessToken);
            formData.append('email', res.email);
        }
        console.log("🚀 ~ file: index.js ~ line 111 ~ handleCreate ~ formData", formData)
        try {
            const res = await ApiSause.post(SOCIAL_LOGIN, formData);
            handleCheckUserData(res);
        } catch (error) {
            setIsLoading(false);
            console.log(
                '🚀  handleCreate ~ error',
                error,
            );
            if (error.status == 404) {
                alert('somg thing wrong')
            }
        }
        // setIsLoading(false)
    };

    const handleCheckUserData = (loginRes) => {
        if (loginRes) {
            setIsLoading(false)
            dispatch({
                type: Auth.LOGIN_USER_API,
                        loading: false,
                        user: loginRes,
                        isLoggedIn: true,
            })
            console.log("🚀 ~ file: SignIn.js ~ line 121 ~ handleCheckUserData ~ loginRes", loginRes)
        }
    }

    return (
        <View>
        {isLoading && <CLoading loading={isLoading} />}
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
                        onCreatePress={() => props.navigation.navigate('sign_up')}
                        onGooglePress={() => { RequestGoogleLogin() }}
                    />


                </View>
            </Container>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})
