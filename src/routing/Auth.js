import React, { useEffect, useState } from "react";
// import Welcome from "../pages/welcome/Welcome";
import { SignIn, OtpVerification, UserInformation , Signup, Forget } from "../pages/auth";
import { useDispatch } from "react-redux";
import { CLoading } from "../uiComponents";
import { createStackNavigator } from "@react-navigation/stack";
import { getValueIntoAsyncStorage } from "../utils/asyncStorage/Functions";
import { WELCOME_SCREEN } from "../utils/asyncStorage/Constants";

export const Stack = createStackNavigator();

function Auth({ initial }) {
    const dispatch = useDispatch();

    const [initialRouteName, updateInitialRouteName] = useState("sign_in");

  

    /** Layout */
    const Layout = (initialRouteName) => {
        if (initialRouteName !== null) {
            return (
                <Stack.Navigator
                    initialRouteName={initialRouteName}
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="sign_in" component={SignIn} />
                    <Stack.Screen name="sign_up" component={Signup} />

                    <Stack.Screen
                        name="otp_verification"
                        component={OtpVerification}
                    />
                    <Stack.Screen
                        name="user_information"
                        component={UserInformation}
                    />
                    <Stack.Screen
                        name="Forget"
                        component={Forget}
                    />
                </Stack.Navigator>
            );
        } else {
            return <CLoading showAnimation={true} loading={true} />;
        }
    };

    return Layout(initialRouteName);
}

export default React.memo(Auth);

