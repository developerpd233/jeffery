import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Platform, StatusBar } from "react-native";
import { Auth, Root } from "./src/routing";
import { getCountries } from "./src/store/actions/Global.action";
import { CLoading } from "./src/uiComponents";
import SplashScreen from "react-native-splash-screen";

const App = () => {
    const dispatch = useDispatch();

    const reduxState = useSelector(({ auth }) => {
        console.log("🚀 ~ file: App.js ~ line 13 ~ reduxState ~ auth", auth);
        return {
            getUserProfileLoading: auth.getUserProfileLoading,
            isLoggedIn: auth.isLoggedIn,
            user: auth.user,
        };
    });

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
        dispatch(getCountries());
        // dispatch(getProfile());
    }, []);

    const renderRouting = (value,) => {
        switch (value) {
            case true:
                return <Root />;
            case false:
                return <Auth  />;
            default:
                return null;
        }
    };

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            {reduxState?.getUserProfileLoading ? (
                <CLoading loading={reduxState?.getUserProfileLoading} />
            ) : (
                renderRouting(false)
            )}
        </View>
    );
};

export default App;
