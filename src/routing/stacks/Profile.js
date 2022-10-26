import * as React from "react";
import {Home, Payment, ProfileScreen, SubmitVote, Vote} from "../../pages/protected";
import {createStackNavigator} from "@react-navigation/stack";
import { Profile } from "../../assets";

const Stack = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function ProfileStack() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={StackScreenOptions}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
         
        </Stack.Navigator>
    );
}
export default ProfileStack;
